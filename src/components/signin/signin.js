import React from 'react';
import './signin-style.css';


const Signin = ({ username, password, setUsername, setPassword, signIn, error, setError, setUser, setRoute, user }) => {

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
                    <h1>Sign in</h1>
                </div>
                <div className="signinform">
                    <form onSubmit={signIn}>
                        <dl className="formrow">
                            <input className="form-control" id="username" placeholder="Username" value={username} name="username" onChange={onUsernameChange}></input>
                        </dl>
                        <dl className="formrow">
                            <input className="form-control" id="password" placeholder="Password" value={password} name="password" type="password" autoComplete="new-password" onChange={onPasswordChange}></input>
                        </dl>
                        <dl className="formrow">
                            <input className="form-submit" type="submit" value="Sign in"></input>
                        </dl>
                        <p className="error">{error}</p>
                    </form>
                    <hr></hr>
                </div>
                <p className="demouser" onClick={(e) => { setUser('demouser'); setRoute('home')}}>Sign in as a demo user</p>
                <p>or</p>
                <p className="demouser" id="create-account" onClick={(e) => { setRoute('register'); setError('')}} >Create account</p>
            </div>
        </div>
    )
}

export default Signin;