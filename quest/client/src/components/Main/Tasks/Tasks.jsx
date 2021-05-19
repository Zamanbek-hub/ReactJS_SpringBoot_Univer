import React from 'react';
import Task from './Task/Task';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { useState,  useEffect } from 'react';
import { useLocation } from 'react-router';

function Tasks({props}) {

    return (
        <div>
            {props.tasks.map((task, i) =>  <Task props={task}/> )}
        </div>
    )
}

export default Tasks
