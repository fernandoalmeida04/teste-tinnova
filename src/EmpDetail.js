import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2>Nome do Funcionário: <b>{empdata.name}</b></h2>
                        <h3>Detalhes:</h3>
                        <h5>E-mail: {empdata.email}</h5>
                        <h5>CPF: {empdata.cpf}</h5>
                        <h5>Telefone: {empdata.phone}</h5>
                        <Link className="btn btn-danger btnVoltar" to="/">Voltar</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;