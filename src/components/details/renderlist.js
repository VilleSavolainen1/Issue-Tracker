import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './details-style.css';
import Plus from './images/plus.png';
import Delete from './images/delete.png';

const RenderList = ({ lists, selectedProject }) => {

    const [addingTicket, setAddingTicket] = useState(false);
    const [cardName, setCardName] = useState('')
    const [selectedList, setSelectedList] = useState(null);


    const handleTicketChange = (e) => {
        addingTicket ? setAddingTicket(false) : setAddingTicket(true);
    }

    const onAddingCardChange = (e) => {
        setCardName(e.target.value);
    }


    const renderLists = lists.map(list => {
        if (list.project === selectedProject.name) {
            return (
                <div className="ticket-wrapper">
                    <div className="list-header">
                        <li key={list.id}><span>{list.name}</span></li>
                        <hr></hr>
                    </div>
                    <div className="add-card" onClick={() => { handleTicketChange(); setSelectedList(list.name) }} >
                        <span className="placeholder">
                            <span className="icon"><img style={{ height: '20px', margin: '0', padding: '0' }} src={Plus} alt=""></img></span>
                                Add a card
                            </span>
                    </div>
                    {addingTicket && selectedList === list.name ?
                        <div className="addingListInput">
                            <input className="input" placeholder="Card name..." onChange={onAddingCardChange} ></input>
                            <div className="addListControls">
                                <Button className="addbutton">Add card</Button>
                                <img className="deleteimage" src={Delete} alt="" onClick={() => handleTicketChange()}></img>
                            </div>
                        </div> : null}
                </div>
            )
        }
    })

    return renderLists;
}

export default RenderList;