import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function RegPage() {
    const [inp, setInp] = useState({ email: '', password: '', confirm: '' });

    const changeStateInp = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value });
    }

    const showInfo = () => {
        try {
            if (!inp.email || !inp.password || !inp.confirm) throw new Error('введите значение');
            if (!/^[\w\d\.\]+@[\w]+\.[\w]{2,4}$/gm.test(inp.email)) throw new Error('некорректно введена почта');
            if (inp.password != inp.confirm) throw new Error('неверно введен пароль');
            console.log(inp);
            setInp({ email: '', password: '', confirm: '' })
        } catch (error) {
            console.log(error.message);
        }
    }
    return (<>
        <>
            <h1>Registration</h1>
            <div>
                <TextField name='email' onChange={changeStateInp} id="outlined-basic" label="Email" variant="outlined" value={inp.email} />
            </div>
            <div>
                <TextField name='password' onChange={changeStateInp} id="outlined-basic" label="Password" variant="outlined" value={inp.password} />
            </div>
            <div>
                <TextField name='confirm' onChange={changeStateInp} id="outlined-basic" label="Confirm" variant="outlined" value={inp.confirm} />
            </div>
            <Button onClick={showInfo} variant="outlined">Sign Up</Button>
            <p> Already have an account? <Link to="/"><Button variant="text">SIGN IN</Button>  </Link></p>
        </>
    </>);
}

export default RegPage;