import React from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CARDS_SEARCH_ROW_API = "http://localhost:8000/cards/get_cards_by_name_contains";

function CardSearch({setCards}) {

    const search_form_style = {
        border: "1px solid white",
        borderRadius: "0px",
        marginTop: "30px",
        borderBottom: "1px solid grey",
        borderRadius: "1px",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
        backgroundColor: ""
    }

    const search_input_style = {
        border: "0",
        outline: "0",
        borderBottom: "0",
        background: "transparent",
        webkitBoxShadow: "none",
        boxShadow: "none",
        textAlign: "left",
        padding: "0",
    }

    
    const submitSearch = event => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(CARDS_SEARCH_ROW_API+`?search=${event.target[1].value}`, {headers:headers}).then(res => {
            setCards(res.data);
        });
    }


    return (
        <form className="input-group rounded" style={search_form_style} onSubmit={e => { e.preventDefault(); submitSearch(e)}}>
            <button type="submit" class="btn">
                <i className="fas fa-search"></i>
            </button>
            <input type="search" className="form-control rounded" style={search_input_style} name="search" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
        </form>
    )
}

export default CardSearch
