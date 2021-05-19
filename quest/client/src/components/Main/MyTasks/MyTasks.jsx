import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { useState,  useEffect } from 'react';
import { useLocation } from 'react-router';
import MyTask from './MyTask/MyTask';

function MyTasks({props}) {

    return (
        <div>
            {props.tasks.map((task, i) =>  <MyTask props={task}/> )}
        </div>
    )
}

export default MyTasks
