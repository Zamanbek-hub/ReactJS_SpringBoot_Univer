import React from 'react';
import './Task.css';
import axios from "axios";
import { useState,  useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import queryString from 'query-string';

function Task({props}) {
    const ANSWER_SAVE_API = "http://localhost:8000/answer/save";
    const location = useLocation();
    const history = useHistory();
    const query = queryString.parse(location.search);

    const saveAnswer = event => {
        const newAnswer = {
            answer: event.target[0].value,
            task_id: props.id
        }

        console.log("newAnswer =");
        console.log(newAnswer);

        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }   

        axios.post(ANSWER_SAVE_API, newAnswer , {headers: headers})
          .then(res => {
            if(res.data.correct)
                alert('Ваш ответ правильный');
            else
                alert('Ваш ответ неправильный');

            history.push(`/quest?id=${query.id}`);
            getAnswer();
        }).catch(err=> {
            
        })
    }

    const MY_ANSWER_GET_API = "http://localhost:8000/answer/get";
    const [taskAnswer, setTaskAnswer] = useState({});
    const getAnswer = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }   

        axios.get(MY_ANSWER_GET_API+`?task_id=${props.id}`, {headers: headers}).then(res => {
            setTaskAnswer(res.data)
        });
    }

    useEffect(() => {
        getAnswer();
    }, {});


    console.log('taskAnswer =');
    console.log(taskAnswer)


    return (
        <div className='task_info_card mt-5'>
            <div className='row'>
                <div className='task_title_div col-4 text-center'>
                    <div className='task_title_inner_div'>
                        <p>{props.title}</p>
                    </div>
                </div>
                <div className='task_description_div col-8'>
                    <div className='task_description_inner_div'>
                        <p><strong>Description:</strong></p>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>   
            {taskAnswer ?    
                <div className='user_correct_answer_div col-8'>
                    <div className='mt-2'>
                        <p><strong>Your Answer:</strong></p>
                        <p>{taskAnswer.answer}</p>
                        <i className="fas fa-check correct_answer"></i>
                    </div>
                </div>      
            :
                <form onSubmit={e => { e.preventDefault(); saveAnswer(e)}}>
                    <div className='user_answer_div mb-3 mt-3'>
                        <textarea className='user_answer form-control' name='answer' id='answer'></textarea>
                    </div>
                    <button className='btn btn-success user_save_answer_btn mb-3'>Save</button>
                </form>
            }
            
        </div>
    )
}

export default Task
