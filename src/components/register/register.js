import React, { useState } from 'react';
import axios from 'axios';
import './register-style.css';


const Register = ({ setRoute, setUser }) => {
    const [usern, setUsername] = useState('');
    const [passw, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [error, setError] = useState('');


    async function onSubmit(e) {
        e.preventDefault();
        if (passw === confirmpassword && usern.length > 0) {
            await axios.post('/register', { username: usern, password: passw })
                .then(res => {
                    setUser(usern)
                    setRoute('/home');
                })
                .catch(() => {
                    setUsername('')
                    setPassword('')
                    setConfirmpassword('')
                    setError("Käyttäjänimi on varattu!")
                })
        } else {
            setError('Täytä puuttuvat tiedot!');
        }
    }

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
        setError('')
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        setError('')
    }

    const confirmPassword = (e) => {
        setConfirmpassword(e.target.value)
        setError('')
    }


    return (
        <div className="signin-container">
            <div className="register">
                <div className="registertitle">
                    <h1>Register</h1>
                </div>
                <div className="registerform">
                    <form onSubmit={onSubmit}>
                        <dl className="formrow">
                            <input className="form-control" placeholder="Username" name="username" value={usern} onChange={onUsernameChange}></input>
                        </dl>
                        <dl className="formrow">
                            <input className="form-control" placeholder="Password" type="password" name="password" value={passw} autoComplete="new-password" onChange={onPasswordChange}></input>
                        </dl>
                        <dl className="formrow">
                            <input className="form-control" placeholder="Confirm password" type="password" value={confirmpassword} onChange={confirmPassword}></input>
                        </dl>
                        <dl className="formrow">
                            <input className="form-submit" type="submit" value="Register"></input>
                        </dl>
                        <p>{error}</p>
                    </form>
                    <hr></hr>
                </div>
                <p>Already have an account?</p>
                <p className="demouser" onClick={() => setRoute('signin')} >Sign in</p>
            </div>
        </div>
    )
}

export default Register;