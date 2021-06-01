import React, { useState } from 'react';
import './details-style.css';
import Plus from './images/plus.png'
import Delete from './images/delete.png'
import { Button } from 'react-bootstrap'
import RenderList from './renderlist';
import Trash from '../details/images/trash.png';
import axios from 'axios';

const Details = ({ allProjects, selectedProject, lists, setListAdded, issues, setIssueCreated, setCreatingNewProject, setRoute }) => {

    const [addingList, setAddingList] = useState(false);
    const [listName, setListName] = useState('');
    const [updateChange, setUpdateChange] = useState(false);
    const [id, setId] = useState(0);

    const handleListAdding = () => {
        addingList ? setAddingList(false) : setAddingList(true)
        setListName('');
    }

    const onAddingListChange = (e) => {
        setListName(e.target.value);
    }


    const addCard = () => {
        if (listName.length > 0) {
            axios.post('/addlist', { name: listName, project: selectedProject.name })
                .then(res => {
                    setAddingList(false)
                    setListAdded(true)
                })
                .catch(() => {
                    console.log("error")
                })
        }
    }

    const onUpdateChange = (e) => {
        setUpdateChange(e.target.value)
    }

    const onIdChange = (id) => {
        setId(id)
    }


    const updateStatus = (e) => {
        e.preventDefault();
        axios.post('/updatestatus', { id: id, status: updateChange })
            .then(res => {
                setCreatingNewProject(true)
            })
            .catch(() => {
                console.log("error")
            })
    }

    function deleteProject(name){
        let ask = window.confirm("Delete this project?")
        if(ask){
            axios.post('/deleteproject', {name: name})
        .then(res => {
            setCreatingNewProject(true)
            setRoute('projects')
        })
        .catch(() => {
            console.log("error")
        })
        }
    }

    const Status = () => {
        let status = allProjects.filter(selected => selected.name === selectedProject.name)
        if (status[0].status === false) {
            return (
                <span style={{ color: '#E1CA36', border: '1px solid #E1CA36', borderRadius: '3px' }}><span style={{ padding: '4px' }}>In progress</span></span>
            )
        } else {
            return (
                <span style={{ color: '#17DF14', border: '1px solid #17DF14', borderRadius: '3px' }}><span style={{ padding: '4px' }}>Done</span></span>
            )
        }
    }


    return (
        <div className="main-content">
            <div className="project-header">
                <h1>{selectedProject.name}</h1>
                <Status />
                <div className="updateform">
                    <form onSubmit={updateStatus} style={{ height: '43px' }} >
                        <label style={{ fontWeight: '600', fontSize: '13px', padding: '4px' }} >Change project status:</label>
                        <select name="status" onChange={onUpdateChange}>
                            <option value={false}>In progress</option>
                            <option value={true}>Done</option>
                        </select>
                        <input className="addbutton" style={{ color: '#fff', fontSize: '14px' }} type="submit" value="Update" onClick={() => onIdChange(selectedProject.id)} ></input>
                    </form>
                </div>
                <img className="trash" src={Trash} alt="" onClick={() => deleteProject(selectedProject.name)} ></img>
            </div>
            <div className="boards-canvas">
                <div className="board">
                    <RenderList lists={lists}
                        selectedProject={selectedProject}
                        issues={issues}
                        setIssueCreated={setIssueCreated}
                        setListAdded={setListAdded} />
                    <div className="list-wrapper">
                        {!addingList ?
                            <p className="add-list" onClick={() => handleListAdding()}>
                                <span className="placeholder">
                                    <span className="icon"><img style={{ height: '20px', margin: '0', padding: '0' }} src={Plus} alt=""></img></span>
                                Add list
                            </span>
                            </p> :
                            <div className="addingListInput">
                                <input className="input" placeholder="List title..." onChange={onAddingListChange} ></input>
                                <div className="addListControls">
                                    <Button className="addbutton" onClick={() => addCard()} >Add list</Button>
                                    <img className="deleteimage" src={Delete} alt="" onClick={() => handleListAdding()}></img>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;