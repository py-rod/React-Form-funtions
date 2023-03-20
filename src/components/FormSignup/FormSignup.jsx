
import { useRef, useState } from "react"
import "../../assets/css/FormSignup.css"
import Login from "../Login/Login"




export default function FormSignup(){
    // PARA PODER OCULTAR O REGRESAR AL REGISTRO
    const [view, setView] = useState(false)
    
    // CREAMOS NUESTRO ARRAY QUE CONTENDRA LOS VALORES DE LOS INPUTS
    let data = [{
        username: "",
        email: "",
        password: "",
        re_password: "",
    }]

    // CREANDO NUESTRO HOOK PARA ALMACENAR Y ENVIAR LOS DATOS AL LOGIN
    const [data_send, setDataSend] = useState({
        username: "",
        email: "",
        password: "",
        re_password: "",
    })


    // FUNCION QUE DETECTA LOS CAMBIOS EN LOS INPUTS
    const GetInput=(element)=>{
        // GUARDANDO EN EL ARRAY DATA
        data[0][`${element.target.name}`] = element.target.value

        // GUARDANDO EN NUESTRO HOOK PARA ENVIAR LOS DATOS LUEGO
        data_send.username = data[0]["username"]
        data_send.email = data[0]["email"]
        data_send.password = data[0]["password"]
        data_send.re_password = data[0]["re_password"]
    }


    // FUNCION PARA CAMBIAR EL VALOR DE VIEW 
    const ShowView=()=>{
        setView(true)
    }


    // BOTON DE ENVIAR LOS DATOS Y VALIDAR 
    const SubmitButton=(element)=>{
        data[0]["view"] = true
        if (data[0]["username"] !== "" && data[0]["email"] !== "" && data[0]["password"] !== "" && data[0]["re_password"] !== ""){
            element.preventDefault();
            ShowView()
        }
    }


    // CONDICIONAL PARA SABER QUE VISTA MOSTRAR
    if (view == false){
        return(
            <>
                <section className="section-1">
                    <form className="form-signup">
                        <div className="content-items1 content-items">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" required id="floatingInput"  name="username" placeholder="username" onChange={GetInput}/>
                                <label for="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" required id="floatingInput"  name="email" placeholder="Email" onChange={GetInput}/>
                                <label for="floatingInput">Email</label>
                            </div>
                        </div>
    
                        <div className="content-items2 content-items">
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" required id="floatingPassword" name="password" placeholder="Password" onChange={GetInput}/>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" required id="floatingPassword" name="re_password"  placeholder="Confirm password" onChange={GetInput}/>
                                <label for="floatingPassword">Confirm Password</label>
                            </div>
                        </div>
    
                        <div className="content-items3">
                            <div className="form-check">
                                <input className="form-check-input check-box-terms" type="checkbox" value="" id="flexCheckIndeterminate"/>
                                <label className="form-check-label" for="flexCheckIndeterminate">
                                    Accept terms of use
                                </label>
                            </div>
                        </div>
                        <button className="button-signup" onClick={SubmitButton}>Register</button>
                    </form>
                </section>
            </>
        )
    }
    else{
        return(
            <Login setView= {setView} data_user={data_send}/>
        )
    }
    
}




// import { useRef, useState } from "react"
// import "../../assets/css/FormSignup.css"
// import Datos from "../Datos/Datos"



// function FormSignup() {
//     const [datos, setDatos] = useState({
//       nombre: '',
//       email: '',
//       telefono: ''
//     });
  
//     const handleInputChange = (event) => {
//       setDatos({
//         ...datos,
//         [event.target.name]: event.target.value
//       });
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       console.log(datos)
//       Datos(datos);
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nombre:
//           <input type="text" name="nombre" value={datos.nombre} onChange={handleInputChange} />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={datos.email} onChange={handleInputChange} />
//         </label>
//         <label>
//           Teléfono:
//           <input type="tel" name="telefono" value={datos.telefono} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Enviar</button>
//       </form>
//     );
//   }
  

// export default FormSignup