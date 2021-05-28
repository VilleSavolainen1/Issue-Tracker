import React, { useState } from 'react';
import './details-style.css';
import Plus from './images/plus.png'
import Delete from './images/delete.png'
import { Button } from 'react-bootstrap'
import RenderList from './renderlist';
import axios from 'axios';

const Details = ({ selectedProject, lists, setListAdded }) => {

    const [addingList, setAddingList] = useState(false);
    const [listName, setListName] = useState('');

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


    return (
        <div className="main-content">
            <div className="project-header">
                <h1>{selectedProject.name}</h1>
            </div>
            <div className="boards-canvas">
                <div className="board">
                    <RenderList lists={lists}
                        selectedProject={selectedProject} />
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