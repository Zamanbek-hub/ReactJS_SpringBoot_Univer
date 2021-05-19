import React from 'react';
import './MyTask.css';

function MyTask({props}) {
    return (
        <div className='my_task_info_card mt-5'>
            <div className='row'>
                <div className='my_task_title_div col-4 text-center'>
                    <div className='my_task_title_inner_div'>
                        <p>{props.title}</p>
                    </div>
                </div>
                <div className='my_task_description_div col-8'>
                    <div className='my_task_description_inner_div'>
                        <p><strong>Description:</strong></p>
                        <p>{props.description}</p>
                        
                    </div>
                    <div className='my_task_answer_inner_div'>
                        <p><strong>Answer:</strong></p>
                        <p>{props.answer}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTask
