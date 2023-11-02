import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import loadingImage from './loading.png';

const EmpEdit = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            emailchange(resp.email);
            cpfchange(resp.cpf);
            phonechange(resp.phone);
            activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[cpf,cpfchange]=useState("");
    const[phone,phonechange]=useState("");
    const[active,activechange]=useState(true);
    const[nameVal,namevalchange]=useState(false);
    const[phoneVal,phonevalchange]=useState(false);
    const[cpfVal,cpfvalchange]=useState(false);
    const button = document.querySelector('#add');

    const addLoading = () => {button.innerHTML = '<img src="'+loadingImage+'" class="loading"></img>'}
    const removeLoading = () => {button.innerHTML = 'Cadastro atualizado!'}
    const enabled = name.length > 3 && cpf.length == 11 & phone.length == 11 ;
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      addLoading();
      const empdata={name,email,cpf,phone};
      

      fetch("http://localhost:8000/employee/"+empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        removeLoading();
        setTimeout(() => {
            navigate('/');
        }, "2000");
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12 noDisplay">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12 categoria">
                                    <div className="form-group">
                                        <label>Nome completo (sem abreviações)</label>
                                        <input required value={name}  onBlur={(e)=>namevalchange(true)} onChange={e=>namechange(e.target.value)} className="form-control labelInput"></input>
                                        {name.length<3 && nameVal && <span className="text-danger">Campo deve conter 3 caracteres ou mais</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12 categoria">
                                    <div className="form-group">
                                        <label>E-mail</label>
                                        <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control labelInput" placeholder="E-mail"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12 categoria">
                                    <div className="form-group">
                                        <label>CPF</label>
                                        <input value={cpf} onBlur={e=>cpfvalchange(true)} onChange={e=>cpfchange(e.target.value)} className="form-control labelInput" placeholder="CPF"></input>
                                        {cpf.length!=11 && cpfVal && <span className="text-danger">Campo deve conter 11 caracteres</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12 categoria">
                                    <div className="form-group">
                                        <label>Telefone</label>
                                        <input value={phone} onBlur={e=>phonevalchange(true)} onChange={e=>phonechange(e.target.value)} className="form-control labelInput" placeholder="Telefone"></input>
                                        {phone.length!=11 && phoneVal && <span className="text-danger">Campo deve conter 11 caracteres</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12 buttons">
                                    <div className="form-group">
                                       <button className="btn btn-success botaoSucesso" type="submit" id="add" disabled={!enabled}>Atualizar</button>
                                       <Link to="/" className="btn btn-danger botaoVoltar">Voltar</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default EmpEdit;