import { useState, ChangeEvent } from "react";
import axiosInstance from "../../axiosConfig";





const Login: React.FunctionComponent = () => {
    const [email, setEmail] = useState<string>()
    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }


    
    const [password, setPassword] = useState<string>()
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }

    axiosInstance
        .post("/")
        .then((res) => {
            localStorage.setItem("access_token", res.data.access_token)
            localStorage.setItem("refresh_token", res.data.refresh_token)


        })  
    return (
        <div className="container ">
            <form className="login">
                <h2>Connexion</h2>
                <div className="form-container">
                    <div className="field col-12 col-md-6">
                        <label>E-mail<span>*</span></label>
                        <input type="text" value={email} onChange={onChangeEmail} />
                    </div>
                    <div className="field col-12 col-md-6">
                        <label>Mot de passe<span>*</span></label>
                        <input type="password" value={password} onChange={onChangePassword} />
                    </div>
                </div>
            </form>
        </div>
    )

}
export default Login