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
  const [projectCreated, setProjectCreated] = useState(false);
  const [allProjects, setAllProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [lists, setLists] = useState([])
  const [issues, setIssues] = useState([])
  const [listAdded, setListAdded] = useState(false);
  const [issueCreated, setIssueCreated] = useState(false);


  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggeduser");
    if (loggedUser) {
      const user = loggedUser;
      setUser(user);
      setRoute('home')
    }
  }, []);



  useEffect(() => {
    axios.get('/list')
      .then(list => {
        setLists(list.data)
        setListAdded(false)
      })
  }, [listAdded])



  useEffect(() => {
    axios.get('/projects')
      .then(project => {
        setAllProjects(project.data)
        setCreatingNewProject(false)
      })
  }, [creatingNewProject])


  useEffect(() => {
    axios.get('/issues')
      .then(issue => {
        setIssues(issue.data)
        setIssueCreated(false)
      })
  }, [issueCreated])


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
      {user === null ?
        <div className="title">
          <h1>Issue Tracker</h1>
        </div>
        : null}
      {route === 'register' && user === null ? <Register setRoute={setRoute} setUser={setUser} /> : null}
      {route === 'signin' && user === null ? <Signin username={username}
        user={user}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        signIn={signIn}
        error={error}
        setError={setError}
        setUser={setUser}
        setRoute={setRoute} /> : null}
      {user !== null ?
        <div className="content">
          <Nav route={route}
            setRoute={setRoute}
            user={user}
            setUser={setUser}
            setError={setError}
            setCreatingNewProject={setCreatingNewProject}
            setProjectCreated={setProjectCreated}
            projectCreated={projectCreated} />
          {route === 'home' ?
            <Home setRoute={setRoute} /> : null}
          {route === 'projects' ?
            <Projects setRoute={setRoute}
              allProjects={allProjects}
              setSelectedProject={setSelectedProject} /> : null}
          {route === 'details' ?
            <Details selectedProject={selectedProject}
              lists={lists}
              setListAdded={setListAdded}
              issues={issues}
              setIssueCreated={setIssueCreated} /> : null}
          {projectCreated ?
            <Create setCreatingNewProject={setCreatingNewProject}
              projectCreated={projectCreated}
              setProjectCreated={setProjectCreated}
              user={user} /> : null}
        </div> : null
      }
    </div>
  );
}

export default App;
