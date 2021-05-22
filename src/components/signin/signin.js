import React from 'react';
import './signin-style.css';


const Signin = ({ username, password, setUsername, setPassword, signIn, error, setError }) => {
  
    const onUsernameChange = (e) => {
        setUsername(e.target.value)
        setError('')
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
        setError('')
    }
    
    return (
        <div className="signin-container">
        <div className="signin">
            <div className="signintitle">
                Login
            </div>
            <div className="signinform">
                <form onSubmit={signIn}>
                    <dl className="formrow">
                        <input className="form-control" placeholder="Username" value={username} name="username" onChange={onUsernameChange}></input>
                    </dl>
                    <dl className="formrow">
                        <input className="form-control" placeholder="Password" value={password} name="password" type="password" autoComplete="new-password" onChange={onPasswordChange}></input>
                    </dl>
                    <dl className="formrow">
                        <input className="form-submit" type="submit" value="Login"></input>
                    </dl>
                    <p>{error}</p>
                </form>
            </div>
        </div>
        </div>
    )

}

export default Signin;