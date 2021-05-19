import React from 'react';

import axios from "axios";
import { useState,  useEffect } from 'react';

import Quest from './Quest/Quest';

function Quests() {
    const ALL_QUESTS_GET_API = "http://localhost:8000/quest/all";

    const [quests, setQuests] = useState([]);
    const getQuests = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(ALL_QUESTS_GET_API, {headers:headers}).then(res => {
            setQuests(res.data);
        });
    }

    useEffect(() => {
        getQuests();
    }, []);

    return (
        <div className='container'>
            <div className='row'>
            {quests.length ? 
                quests.map((quest, i) =>  <Quest props={quest}/> )
                :
                <h1>Нету квестов</h1>    
            }
            </div>
        </div>
    )
}

export default Quests
