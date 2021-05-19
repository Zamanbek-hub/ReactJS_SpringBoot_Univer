import React from 'react';

import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { useState,  useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';

import './TaskCreate.css'

function TaskCreate() {
    let match = useRouteMatch();
    const location = useLocation();
    const query = queryString.parse(location.search);
    const QUEST_GET_API = "http://localhost:8000/quest/get";

    const [quest, setQuest] = useState({});
    const getQuest = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }   
        
        console.log("query =");
        console.log(query);
        axios.get(QUEST_GET_API+`?id=${query.quest_id}`, {headers: headers}).then(res => {
            setQuest(res.data)
        });
    }

    useEffect(() => {
        getQuest();
    }, {});


    const TASK_CREATE_API = "http://localhost:8000/tasks/create";
    const history = useHistory();

    const saveTask = event => {
        const newTask = {
            title: event.target[0].value,
            description: event.target[1].value,
            answer: event.target[2].value,
            quest: quest
        }

        console.log("newTask =");
        console.log(newTask);

        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }   

        axios.post(TASK_CREATE_API, newTask , {headers: headers})
          .then(res => {
            alert('Задание успешно создано');
            history.push(`/create_task?quest_id=${quest.id}&task_order=${parseInt(query.task_order) + 1}`);
        }).catch(err=> {
            alert("Вышла ошибка");
        })
    }



    return (
        <div className='container'>
            <form className='mt-3 quest_create_card' onSubmit={e => { e.preventDefault(); saveTask(e)}}>
                <img className='img-fluid' src='/images/task_1.jpeg' />
                <div className="form-group">
                    <label for="name">Название</label>
                    <input type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label for="description">Описание</label>
                    <textarea type="text" className="form-control" id="description" name="description" ></textarea>
                </div>
                <div className="form-group">
                    <label for="answer">Ответ</label>
                    <textarea type="text" className="form-control" id="answer" name="answer" ></textarea>
                </div>
                
                <div>
                    <button type="submit" className="btn btn-success mt-5 create_button">Создать</button>
                </div>

            </form>
        </div>
    )
}

export default TaskCreate
