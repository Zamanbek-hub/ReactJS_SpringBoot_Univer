import React from 'react';
import CardSearch from './CardSearch';
import CardAdd from './CardAdd';
import Card from './Card/Card';
import NotFound from './NotFound';
import axios from "axios";
import { useState,  useEffect } from 'react';

const CARDS_ROW_API = "http://localhost:8000/cards";

const CardsRow = () => {
    const [cards, setCards] = useState([]);
    
    const setCardsFunc = () =>  {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(CARDS_ROW_API, {headers:headers}).then(res => {
            setCards(res.data)
        });
    }

    useEffect(() => {
        setCardsFunc();
    }, []);

    console.log("jwtToken: ")
    console.log(localStorage.getItem('jwtToken'))

    return (
        <div className="container">
            <CardSearch setCards={setCards}/>
            <CardAdd setCardsFunc={setCardsFunc}/>
            <div className="row"> 
                {cards.length ? cards.map((card, i) => <Card key={i} props={card}/>) : <NotFound />}
            </div>
        </div>
    )
}

export default CardsRow
