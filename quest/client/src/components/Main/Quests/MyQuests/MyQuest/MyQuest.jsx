import React from 'react';
import './MyQuest.css'

function MyQuest({props}) {
    return (    
        <div className='col-4 my_quest'>
            <div>
                <a href={`/my_quest?id=${props.id}`}>               
                    <img src='/images/quest_1.jpeg' className='img-fluid'/>
                </a>
                <div className='text-center role_text'>
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
    )
}

export default MyQuest
