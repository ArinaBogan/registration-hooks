import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    const [inp, setInp] = useState({ email: '', password: '' });

    const changeStateInp = (e) => {

        setInp({ ...inp, [e.target.name]: e.target.value })
    }
    const showInfo = () => {
        try {
            if (!inp.email || !inp.password) throw new Error('введите значение');
            if (!/^[\w\d]+@[\w\d\.]+$/gm.test(inp.email)) throw new Error('некорректно введена почта');
            console.log(inp);
            setInp({ email: '', password: '' })
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <h1>Registration</h1>
            <TextField name='email' onChange={changeStateInp} id="outlined-basic" label="Email" variant="outlined" value={inp.email} />
            <TextField name='password' onChange={changeStateInp} id="outlined-basic" label="Password" variant="outlined" value={inp.password} />
            <Button onClick={showInfo} variant="outlined">Login</Button>
            <p>
                Don't have an account yet?
                <Link to="/reg">
                    <Button variant="text">SIGN UP</Button>
                </Link>
            </p>

        </>
    );
}

export default LoginPage;