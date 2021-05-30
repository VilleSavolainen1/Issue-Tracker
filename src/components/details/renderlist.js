import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './details-style.css';
import Plus from './images/plus.png';
import Delete from './images/delete.png';
import Check from './images/check.png';
import axios from 'axios';

const RenderList = ({ lists, selectedProject, issues, setIssueCreated, setListAdded }) => {

    const [addingTicket, setAddingTicket] = useState(false);
    const [cardName, setCardName] = useState('')
    const [selectedList, setSelectedList] = useState(null);
    const [showPopover, setShowPopover] = useState(false);



    const handleTicketChange = () => {
        addingTicket ? setAddingTicket(false) : setAddingTicket(true);
    }

    const onAddingCardChange = (e) => {
        setCardName(e.target.value);
    }

    const handlePopover = () => {
        showPopover ? setShowPopover(false) : setShowPopover(true)
    }

    const createIssue = (list, project) => {
        if (cardName.length > 0) {
            axios.post('/createissue', { name: cardName, list: list, project: project })
                .then(res => {
                    setIssueCreated(true)
                })
                .catch(() => {
                    console.log("error")
                })
        }
    }

    const deleteIssue = (name, list, project) => {
        axios.post('/deleteissue', { name: name, list: list, project: project })
            .then(res => {
                setIssueCreated(true)
            })
            .catch(() => {
                console.log("error")
            })
    }

    const deleteList = (name, project) => {
        axios.post('/deletelist', {name, project})
        .then(res => {
            setListAdded(true)
        })
        .catch(() => {
            console.log("error")
        })
    }


    const renderLists = lists.map(list => {
        if (list.project === selectedProject.name) {
            return (
                <div key={list.id} className="ticket-wrapper">
                    <div className="list-header">
                        <li key={list.id}><span>{list.name}</span></li>
                        <div className="list-menu">
                            <div style={{ cursor: 'pointer' }} onClick={() => { handlePopover(); setSelectedList(list.name) }} >&#xFE19;</div>
                        </div>
                        {showPopover && selectedList === list.name ?
                            <div className="pop-over">
                                <span style={{ cursor: 'pointer', padding: '4px' }} onClick={() => {deleteList(list.name, list.project); handlePopover()}} >Delete list</span>
                                <div className="closepopoversection">
                                    <img className="closepopover" src={Delete} alt="" onClick={() => handlePopover()}></img>
                                </div>
                            </div> : null}
                        <hr></hr>
                    </div>
                    {issues.map(issue => {
                        if (issue.list === list.name && issue.project === list.project) {
                            return (
                                <div key={issue.id} className="issues">
                                    <p className="issueitem">{issue.name}</p>
                                    <div className="checkbox">
                                        <img className="deleteimage" src={Check} alt="" onClick={() => deleteIssue(issue.name, issue.list, issue.project)}></img>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })}
                    <div className="add-card" onClick={() => { handleTicketChange(); setSelectedList(list.name) }} >
                        <span className="placeholder">
                            <span className="icon"><img style={{ height: '20px', margin: '0', padding: '0' }} src={Plus} alt=""></img></span>
                                Create issue
                            </span>
                    </div>
                    {addingTicket && selectedList === list.name ?
                        <div className="addingListInput">
                            <input className="input" placeholder="Card name..." onChange={onAddingCardChange} ></input>
                            <div className="addListControls">
                                <Button className="addbutton" onClick={() => { createIssue(list.name, list.project); handleTicketChange() }} >Create</Button>
                                <img className="deleteimage" src={Delete} alt="" onClick={() => handleTicketChange()}></img>
                            </div>
                        </div> : null}
                </div>
            )
        }
        return null;
    })

    return renderLists;
}

export default RenderList;