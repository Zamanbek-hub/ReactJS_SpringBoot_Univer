import React from 'react';
import './Quest.css';

function Quest({props}) {
    return (
        <div className='col-4 quest_card'>
            <div>
                <a href={`/quest?id=${props.id}`}>               
                    <img src='/images/quest_1.jpeg' className='img-fluid'/>
                </a>
                <div className='text-center role_text'>
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Quest
