import React from 'react';
import axios from "axios";

function CardAdd({setCardsFunc}) {
    const CARDS_ROW_API_ADD_CARD = "http://localhost:8000/cards/addCard";
    
    const add_card = {
        width: "400px",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"10px",
        borderBottom: "1px solid grey",
        borderRadius: "1px",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
        marginTop: "40px",
        marginBottom: "40px"
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


    const submitCard = event => {
        const newCard = {
            name: event.target[0].value,
        }

        axios.post(CARDS_ROW_API_ADD_CARD+`?name=${event.target[0].value}`, { newCard })
          .then(res => {
            setCardsFunc();
        })
    }

    

    return (
        <div>
            <div className="card"  style={add_card}>
                <form className="card-body" onSubmit={e => { e.preventDefault(); submitCard(e)}}>
                    <input type="text" className="form-control" name="card_name" style={input_style} placeholder="Create new Card"/>
                    <br/>
                    <button className="btn" type="submit" style={add_card_button}>Add New+</button>
                </form>
            </div>
        </div>
    )
}

export default CardAdd;
