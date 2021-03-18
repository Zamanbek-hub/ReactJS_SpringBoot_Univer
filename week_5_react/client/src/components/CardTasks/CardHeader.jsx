import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

import 'jquery/dist/jquery.min.js';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const CARD_EDIT_API_BY_ID = "http://localhost:8000/cards/edit_card"
const CARD_REMOVE_API_BY_ID = "http://localhost:8000/cards/remove_card"

function CardHeader({props, setCardFunc}) {
    const history = useHistory();

    const cardStyle = {
        width: "90%",
        backgroundColor: "#687A9A",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop: "40px",
        borderBottom: "1px solid grey",
        borderRadius: "1px",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
        color:"#D4D7DB",
    }

    const card_body = {
        paddingTop: "20px",
        paddingBottom: "20px",
        marginBottom: "50px",
    }

    const card_link = {
        color: "white",
        fontSize: "18px",
        marginBottom: "5px",
        marginRight: "20px",
        backgroundColor: "transparent",
        border: "0",
    }

    const modal_button_style = {
        marginLeft: "10px",
    }

    
    const updateCard = event => {
        const editCard = {
            id: event.target[0].value,
            name:event.target[1].value, 
        }

        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.post(CARD_EDIT_API_BY_ID, editCard, {headers:headers})
          .then(res => {
            setCardFunc();
        })
    }

    const removeCard = event => {
        axios.post(CARD_REMOVE_API_BY_ID, {card_id: event.target[0].value})
          .then(res => {
            document.getElementById("deleteModalClose").click()
            history.push("");
        })
    }

    var dt = new Date(props.addedDate);

    
    return (
        <div>
            <div className="card" style={cardStyle}>
                <div className="card-body" style={card_body}> 
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{dt.getFullYear() + "." + dt.getMonth() + "." + dt.getDate() 
                                                + "  " + dt.getHours() + ":" + dt.getMinutes()}</p>
                </div>
                <div className="card-footer text-muted">
                    <button style={card_link} type="button" data-toggle="modal" data-target="#editModal"><strong>Edit</strong></button>
                    <button style={card_link} type="button" data-toggle="modal" data-target="#deleteModal"><strong>Delete</strong></button>
                    
                </div>
            </div>

            <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalabel">Are you sure wanna delete?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="deleteModalClose">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.name}
                    </div>
                    <div className="modal-footer">
                        <form onSubmit={e => {e.preventDefault(); removeCard(e)}}>
                            <input type="hidden" name="card_id" value={props.id} />
                            <button type="button" style={modal_button_style} className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editModalabel">Edit Card</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={e => {e.preventDefault(); updateCard(e)}}>
                        <div className="modal-body">
                            <input class="form-control" type="hidden" name="id" value={props.id} />
                            <input class="form-control" type="text" name="id" defaultValue={props.name} required/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" style={modal_button_style} className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Edit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHeader
