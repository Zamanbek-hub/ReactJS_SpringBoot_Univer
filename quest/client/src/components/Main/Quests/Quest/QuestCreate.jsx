import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

import './QuestCreate.css';

function QuestCreate() {
    const QUEST_CREATE_API = "http://localhost:8000/quest/create";
    const history = useHistory();

    const saveProgram = event => {
        const newQuest = {
            title: event.target[0].value,
            description: event.target[1].value,
        }

        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.post(QUEST_CREATE_API, newQuest , {headers: headers})
          .then(res => {
            let quest_id = res.data.id;
            alert('Программа успешно создано');
            history.push(`/create_task?quest_id=${quest_id}&task_order=1`)
        }).catch(err=> {
            alert("Вышла ошибка");
        })
    }

    return (
        <div className='container'>
            <form className='mt-3 quest_create_card' onSubmit={e => { e.preventDefault(); saveProgram(e)}}>
                <img className='img-fluid' src='/images/quest_1.jpeg' />
                <div class="form-group">
                    <label for="name">Название</label>
                    <input type="text" class="form-control" id="name" name="name" />
                </div>
                <div class="form-group">
                    <label for="description">Описание</label>
                    <textarea type="text" class="form-control" id="description" name="description" ></textarea>
                </div>
                <button type="submit" class="btn btn-primary mt-5">Создать</button>
            </form>
        </div>
    )
}

export default QuestCreate
