import React from 'react';
import MyQuest from './MyQuest/MyQuest';

import axios from "axios";
import { useState,  useEffect } from 'react';

function MyQuests() {
    const MY_QUESTS_GET_API = "http://localhost:8000/quest/my_all";

    const [quests, setQuests] = useState([]);
    const getQuests = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(MY_QUESTS_GET_API, {headers:headers}).then(res => {
            setQuests(res.data);
        });
    }

    useEffect(() => {
        getQuests();
    }, []);

    return (
        <div className='container'>
            <h3>My Quests: </h3>
            <div className='row mt-5'>
                {quests.map((quest, i) =>  <MyQuest props={quest}/> )}
            </div>
        </div>
    )
}

export default MyQuests
