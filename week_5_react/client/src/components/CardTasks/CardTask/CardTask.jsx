import React from 'react';
import axios from "axios";
import { useState,  useEffect } from 'react';
import { DragSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'

const CARDTASKS_ROW_API_CHANGE_DONE_STATE = "http://localhost:8000/cards/change_card_task_done_state";

function CardTask({props, setCardTasksFunc}) {
    const cardTaskStyle = {
        width: "90%",
        backgroundColor: "#687A9A",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "30px",
        borderBottom: "1px solid grey",
        borderRadius: "1px",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
        color:"#D4D7DB",

    }

    const card_body = {
        paddingTop: "20px",
        paddingBottom: "20px",
    }

    const card_link = {
        color: "white",
        fontSize: "18px",
        marginBottom: "5px",
        marginRight: "20px",
    }   

    var dt = new Date(props.addedDate);

    
    const [toggle, setToggle] = useState({checked:props.done});
    const changeTaksDoneState = (c) => {
        setToggle({ checked: c });
        const editCardTask = {
            id: props.id,
            done: !toggle.checked,
        }

        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.post(CARDTASKS_ROW_API_CHANGE_DONE_STATE,  editCardTask, {headers:headers})
        .then(res => {
            setCardTasksFunc();
        });

    }

    return (
        <div>
            <div className="card" style={cardTaskStyle}>
                <div className="card-body" style={card_body}> 
                    <p className="card-title">{props.taskText}</p>
                    <p className="card-text">{dt.getFullYear() + "." + dt.getMonth() + "." + dt.getDate() 
                                                + "  " + dt.getHours() + ":" + dt.getMinutes()}</p>
                    <DragSwitch
                        checked={toggle.checked}
                        onChange={c => {changeTaksDoneState(c)}}
                    />
                    <span> Done!</span>
                </div>
            </div>
        </div>
    )

}

export default CardTask
