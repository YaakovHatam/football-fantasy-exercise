import { useState } from "react";



function Login() {

    const [formData, setFormData] = useState({ email: '', pass: '' });

    const onLogin = e => {
        e.preventDefault();
        fetch("/api/auth/login", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "email": formData.email,
                "pass": formData.pass
            })
        }).then(res => res.text()).then(response => window.localStorage.setItem('jwt', response));
    }


    const onInputChange = (prop, value) => setFormData({ ...formData, [prop]: value });

    return (<form>
        <label>Email: <input onChange={e => onInputChange('email', e.target.value)} /></label>
        <label>Password: <input onChange={e => onInputChange('pass', e.target.value)} type={"password"} /></label>
        <button onClick={onLogin}>Login</button>
    </form>)
}

export default Login;