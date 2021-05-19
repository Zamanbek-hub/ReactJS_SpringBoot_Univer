import React from 'react';

import axios from "axios";

import { useState,  useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import Tasks from '../../../Tasks/Tasks';
import { useHistory } from 'react-router-dom';

import './MyQuestPage.css';
import MyTasks from '../../../MyTasks/MyTasks';

function MyQuestPage() {
    const location = useLocation();
    const query = queryString.parse(location.search);

    const QUEST_GET_API = "http://localhost:8000/quest/get";
    const [quest, setQuest] = useState({});
    const getQuest = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }   
        
        axios.get(QUEST_GET_API+`?id=${query.id}`, {headers: headers}).then(res => {
            setQuest(res.data)
        });
    }

    useEffect(() => {
        getQuest();
    }, {});


    const GET_TASKS_BY_QUERS_API = "http://localhost:8000/tasks/quest_tasks";
    const [tasks, setTasks] = useState([]);
    const getTasks = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }
        
        axios.get(GET_TASKS_BY_QUERS_API+`?quest_id=${query.id}`, {headers:headers}).then(res => {
            setTasks(res.data);
        });
    }

    useEffect(() => {
        getTasks();
    }, []);


    const QUEST_CREATE_API = "http://localhost:8000/quest/update";
    const history = useHistory();
    const saveQuest = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.post(QUEST_CREATE_API, quest, {headers: headers})
          .then(res => {
            
            alert('Квест теперь может играть другие пользователи');
            history.push(`/my_quest?id=${quest.id}`)
        }).catch(err=> {
            alert("Вышла ошибка");
        })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-11 text-center mt-3'>
                    <h3>{quest.title}</h3>
                </div>
                { ! quest.is_seem &&
                    <div className='col-1 mt-3'>
                        <button className='btn btn-success' onClick={e => {saveQuest()}}>Ready</button>
                    </div>
                }
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='quest mt-5'>
                        <img src='/images/quest_1.jpeg' className='img-fluid'/> 
                    </div>
                    <div className='text-center quest_description mt-5'>
                        <p>{quest.description}</p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='tasks'>
                        <MyTasks props={{tasks: tasks}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyQuestPage
