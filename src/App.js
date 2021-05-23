import './App.css';
import Nav from './components/navbar/navbar';
import Home from './components/homepage/homepage';
import React, { useEffect, useState } from 'react';
import Register from './components/register/register';
import Signin from './components/signin/signin';
import Projects from './components/projects/projects';
import Details from './components/details/details';
import Create from './components/create/create';
import axios from 'axios';


function App() {

  const [route, setRoute] = useState('signin');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [creatingNewProject, setCreatingNewProject] = useState(false)



  function signIn(e) {
    e.preventDefault();
    if (username.length === 0 || password.length === 0) {
      setError("Give username and password!")
    } else {
      axios.post('http://localhost:3001/signin', { username: username, password: password })
        .then(res => {
          if (res.status === 200) {
            setRoute('home')
            setUser(username)
            localStorage.setItem("loggeduser", username);
            setUsername('');
            setPassword('');
          } else {
            setError("Wrong username or password!");
            setUsername('');
            setPassword('');
          }
        })
        .catch(() => {
          setUsername('')
          setPassword('')
          setError("Wrong username or password!")
        })
    }
  }



  return (
    <div className="App">
      {route === 'register' || route === 'signin' ?
        <div className="title">
          <h1>Issue Tracker</h1>
        </div>
        : null}
      {route === 'register' ? <Register setRoute={setRoute} setUser={setUser} /> : null}
      {route === 'signin' ? <Signin username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        signIn={signIn}
        error={error}
        setError={setError}
        setUser={setUser}
        setRoute={setRoute} /> : null}
      {user !== null ?
        <div>
          <Nav route={route}
            setRoute={setRoute}
            user={user}
            setUser={setUser}
            setError={setError}
            setCreatingNewProject={setCreatingNewProject} />
          {route === 'home' ?
            <Home setRoute={setRoute} /> : null}
          {route === 'projects' ?
            <Projects setRoute={setRoute} /> : null}
          {route === 'details' ?
            <Details /> : null}
          {creatingNewProject ?
            <Create setCreatingNewProject={setCreatingNewProject} /> : null}
        </div> : null
      }
    </div>
  );
}

export default App;
