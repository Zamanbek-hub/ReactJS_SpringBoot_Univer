import React from 'react';
import axios from "axios";
import { useRouteMatch } from 'react-router-dom';
import { useState,  useEffect } from 'react';

import CardHeader from './CardHeader';
import CardTaskAdd from './CardTaskAdd';
import CardTask from './CardTask/CardTask';

const CARD_GET_API_BY_ID = "http://localhost:8000/cards/card"
const CARD_TASKS_GET_API_BY_ID = "http://localhost:8000/cards/card_tasks"

function CardTasks() {
    let match = useRouteMatch();

    const [card, setCard] = useState({});
    const setCardFunc = () => {
        axios.get(CARD_GET_API_BY_ID+`?${match.params.id}`).then(res => {
            setCard(res.data)
        });
    }

    useEffect(() => {
        setCardFunc();
    }, {name:'Undefined', addedDate:'Undefined'});

  
    const [cardTasks, setCardTasks] = useState([]);
    const setCardTasksFunc = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }
        
        axios.get(CARD_TASKS_GET_API_BY_ID+`?${match.params.id}`, {headers:headers}).then(res => {
            setCardTasks(res.data)
        });
    }

    useEffect(() => {
        setCardTasksFunc()
    }, []);

    return (
        <div className="container">
            <CardHeader props={card} setCardFunc={setCardFunc}/>
            <CardTaskAdd setCardTasksFunc={setCardTasksFunc}/>
            <div>
                {cardTasks.map((card_task, i) => <CardTask key={i} props={card_task} setCardTasksFunc={setCardTasksFunc}/>)}
            </div>
        </div>
    )
}

export default CardTasks
