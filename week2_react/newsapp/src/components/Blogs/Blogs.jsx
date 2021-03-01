import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Blogs({ data }) {
    return (
        <div className="blogs__data row">
            <div className="col-4">
                <img className="blogs__img" src={data.urlToImage}/>
            </div>
            <div className="col-8">
                <h3 className="blogs__name">{data.name}</h3>
                <p className="blogs__desc">{data.desc}</p>
                <br/>
                <span className="blogs__published">Posted at {data.posted_date}</span>
            </div>
        </div>
    )
}

export default Blogs
