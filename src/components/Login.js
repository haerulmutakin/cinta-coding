import { useState } from "react"

const Login = () => {

    const [username, setUsername] = useState(null);
    const [password, setPasssword] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password)
    }
    return ( 
        <div className="login-page">
            <h3>Login Page</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setPasssword(e.target.value)}/>
                <button type="submit" disabled={!username || !password}>Login</button>
            </form>
        </div>
     );
}
 
export default Login;