import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthSvc from '../_services/AuthService';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPasssword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        const authenticated = await AuthSvc(username, password);
        if(authenticated) {
            navigate('/post');
        }
        setLoading(false)
    }
    return ( 
        <div className="login-page">
            <h3>Login Page</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setPasssword(e.target.value)}/>
                <button type="submit" disabled={!username || !password || loading}>Login</button>
            </form>
        </div>
     );
}
 
export default Login;