import React from 'react';
import {Link} from 'react-router-dom';


function Card({props}) {
    const cardStyle = {
        width: "90%",
        marginRight: "auto",
        marginTop: "20px",
        borderBottom: "1px solid grey",
        borderRadius: "1px",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
    }


    const card_body = {
        paddingTop: "30px",
        paddingBottom: "40px",
    }

    const card_link = {
        color: "#2230A9",
        fontSize: "18px",
        marginBottom: "5px",
    }

    var dt = new Date(props.addedDate); 

    
    return (
        <div className="col-4">
            <div className="card" style={cardStyle}>
                <div className="card-body" style={card_body}> 
                    <h4 className="card-title">{props.name}</h4>
                    <Link to={`card/id=${props.id}`} style={card_link}><strong>Details</strong></Link>
                    <p className="card-text">{dt.getFullYear() + "." + dt.getMonth() + "." + dt.getDate() 
                                                + "  " + dt.getHours() + ":" + dt.getMinutes()}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
