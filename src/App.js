import './App.css';
import Nav from './components/navbar/navbar';
import Home from './components/homepage/homepage';
import React, { useEffect, useState } from 'react';
import Register from './components/register/register';
import Signin from './components/signin/signin';
import Projects from './components/projects/projects';
import Details from './components/details/details';
import axios from 'axios';


function App() {

  const [route, setRoute] = useState('home');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



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
      {user !== null ?
        <div>
          <Nav route={route}
            setRoute={setRoute}
            user={user}
            setUser={setUser} />
          {route === 'home' ?
            <Home setRoute={setRoute} /> : null}
          {route === 'projects' ?
            <Projects setRoute={setRoute} /> : null}
          {route === 'details' ?
            <Details /> : null}
        </div> :
        <Signin username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          signIn={signIn}
          error={error}
          setError={setError} />

      }
    </div>
  );
}

export default App;
