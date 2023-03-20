import "../../assets/css/Profile.css"
import image_profile from "../../assets/images/defaul_profile.jpg"


function Profile(props){
    // funcionando perfecto
    // console.log(props.data_profile)

    let data = [{
        first_name: "",
        last_name: "",
        username: props.data_profile.username,
        email: "",
    }]

    const GetInputsValue =(element)=>{
        data[0][`${element.target.name}`] = element.target.value
        element.preventDefault();
    }

    return(
        <>
            <div className="content-profile">
                <form className="form-profile">
                    <h3>Profile Information</h3>
                    <div className="content-data-profile">
                        <div>
                            <img src={image_profile} alt="..."/>
                            <div className="content-user-email">
                                <p>Username: <span>{props.data_profile.username}</span></p>
                                <p>Email: <span>{props.data_profile.email}</span></p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" required id="floatingInput" 
                                     name="first_name" placeholder="First Name" onChange={GetInputsValue}/>
                                    <label for="floatingInput">First Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" required id="floatingInput" 
                                     name="last_name" placeholder="Last Name" onChange={GetInputsValue} />
                                    <label for="floatingInput">Last Name</label>
                                </div>
                            </div>
                            <div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" required id="floatingInput" 
                                     name="username" placeHolder="username" onChange={GetInputsValue}/>
                                    <label for="floatingInput">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" required id="floatingInput" 
                                     name="email" placeholder="Email" onChange={GetInputsValue}/>
                                    <label for="floatingInput">Email</label>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <button className="button-update-profile">Update</button>
                </form>
            </div>
        </>
    )
}


export default Profile