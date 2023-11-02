import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import loadingImage from './loading.png';

const EmpCreate = () => {

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[cpf,cpfchange]=useState("");
    const[active,activechange]=useState(true);
    const[nameVal,namevalchange]=useState(false);
    const[phoneVal,phonevalchange]=useState(false);
    const[cpfVal,cpfvalchange]=useState(false);
    const button = document.querySelector('#add');

    const addLoading = () => {button.innerHTML = '<img src="'+loadingImage+'" class="loading"></img>'}
    const removeLoading = () => {button.innerHTML = 'Cadastro realizado com sucesso!'}
    const enabled = name.length > 3 && cpf.length == 11 & phone.length == 11 ;
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();

      addLoading();
      const empdata={name,email,cpf,phone};
      
      fetch("http://localhost:8000/employee",{
        method:"POST",
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
                                            <label >Nome completo (sem abreviações)</label>
                                            <input required value={name} onBlur={(e)=>namevalchange(true)} onChange={e=>namechange(e.target.value)} className="form-control labelInput" placeholder="Nome completo (sem abreviações)" id="inputNome"></input>
                                            {name.length<3 && nameVal && <span className="text-danger">Campo deve conter 3 caracteres ou mais</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 categoria">
                                        <div className="form-group">
                                            <label>E-mail</label>
                                            <input required value={email} onChange={e=>emailchange(e.target.value)} className="form-control labelInput" placeholder="E-mail"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 categoria">
                                        <div className="form-group">
                                            <label>CPF</label>
                                            <input required value={cpf} onBlur={e=>cpfvalchange(true)} onChange={e=>cpfchange(e.target.value)} className="form-control labelInput" placeholder="CPF"></input>
                                            {cpf.length!=11 && cpfVal && <span className="text-danger">Campo deve conter 11 caracteres</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 categoria">
                                        <div className="form-group">
                                            <label>Telefone</label>
                                            <input required value={phone} onBlur={e=>phonevalchange(true)} onChange={e=>phonechange(e.target.value)} className="form-control labelInput" placeholder="Telefone"></input>
                                            {phone.length!=11 && phoneVal && <span className="text-danger">Campo deve conter 11 caracteres</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 buttons">
                                        <div className="form-group">
                                           <button className="btn btn-success botaoSucesso" id="add" type="submit" disabled={!enabled}>Cadastrar</button>
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

export default EmpCreate;