import React from 'react';
import axios from "axios";
import { useState,  useEffect } from 'react';
import MyQuests from './Quests/MyQuests/MyQuests';

import './Main.css';
import Quests from './Quests/Quests';

function Main() {
    const PROGRAM_ADD_API = "http://localhost:8000/roles/have_role";

    const [role, setRole] = useState({});
    const checkRole = (role) => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(PROGRAM_ADD_API+`?role=${role}`, {headers: headers}).then(res => {
            setRole(res.data)
        });
    }

    useEffect(() => {
        checkRole("ROLE_ADMIN");
    }, []);

    return (
        <div className='container mt-5'>
            {role &&
                <a href='/create'>
                    <button className='btn btn-success create_button'>Create</button>
                </a>
            }
            { role &&
                <div>
                    <MyQuests />
                    <hr />
                </div>
            }
            <Quests />
        </div>
    )
}

export default Main
