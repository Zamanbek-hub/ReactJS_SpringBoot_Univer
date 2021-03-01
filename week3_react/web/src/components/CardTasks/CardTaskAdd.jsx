import React from 'react';
import axios from "axios";
import { useRouteMatch, Link} from 'react-router-dom';
import { useState,  useEffect } from 'react';

function CardTaskAdd({setCardTasksFunc}) {
    let match = useRouteMatch();
    const CARDS_ROW_API_ADD_CARD = "http://localhost:8000/cards/add_card_task";

    const add_card = {
        width: "90%",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"10px",
        borderBottom: "1px solid grey",
        borderRadius: "1px",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
    }

    const add_card_button = {
        backgroundColor: "#21BA8C",
        color:"white",
    }

    const input_style = {
        border: "0",
        outline: "0",
        background: "transparent",
        borderBottom: "1px solid black",
        borderRadius: "0",
        webkitBoxShadow: "none",
        boxShadow: "none",
        textAlign: "left",
        padding: 0,
    }

    const submitCardTask = event => {
        const newCardTask = { 
            taskText: event.target[0].value,
            card: match.params.id.split("=")[1],
        }
        event.target[0].value = "";

        axios.post(CARDS_ROW_API_ADD_CARD+`?card_id=${match.params.id.split("=")[1]}`,  newCardTask )
          .then(res => {
            setCardTasksFunc();
        })
    }


    return (
        <div>
            <div className="card"  style={add_card}>
                <form className="card-body" onSubmit={e => {e.preventDefault(); submitCardTask(e)}}>
                    <textarea type="text" className="form-control" name="cardtask_text" style={input_style}></textarea>
                    <br/>
                    <button className="btn" type="submit" style={add_card_button}>Add New Task+</button>
                </form>
            </div>
        </div>
    )
}

export default CardTaskAdd
