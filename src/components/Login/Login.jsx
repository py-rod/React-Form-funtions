
import image from "../../assets/images/defaul_profile.jpg"
import "../../assets/css/Login.css"
import arrow from "../../assets/icons/arrow.svg"
import Profile from "../Profile/Profile"
import { useState } from "react"




export default function Login(props){

    const [profile, setProfile] = useState(false)

    let data =[{
        username: "",
        email: props.data_user.email,
        password: ""
    }]

    // FUNCION PARA CAMBIAR EL VALOR DE LA FUNCION SETVIEW DE FORMSIGNUP Y REGRESAR A FORMSIGNUP
    const RedirecFormSignup =()=>{
        props.setView(false)
    }

    const GetInpustValue =(element)=>{
        data[0][`${element.target.name}`] = element.target.value
    }


    const GoProfile =(element)=>{
        if (data[0]["username"] == props.data_user.username || data[0]["email"] == props.data_user.email && data[0]["password"] == props.data_user.password){
            element.preventDefault()
            setProfile(true)
        }
    }
    
    if (profile == false ){
        return(
            <>
            <div className="content-login">
                <form className="form-login">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" required id="floatingInput"  name="username" placeholder="username or email"
                         onChange={GetInpustValue}/>
                        <label for="floatingInput">Username or Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" required id="floatingPassword" name="password" placeholder="Password" 
                        onChange={GetInpustValue} />
                        <label for="floatingPassword">Password</label>
                    </div>
    
                    <a href="/" className="forgot-password"> Forgot Password?</a>
    
                    <button className="button-login" onClick={GoProfile}>Login</button>
    
                    <p className="content-reditect">Not a member? <a className="redirect-signup" onClick={RedirecFormSignup}>Signup now</a></p>
                </form>
                
            </div>
            </>
        )
    }
    else{
        return(
            <Profile data_profile ={props.data_user}/>
        )
    }
}




{/* <button className="button-back" onClick={hiident}>Back <span><img src={arrow}/></span></button> */}