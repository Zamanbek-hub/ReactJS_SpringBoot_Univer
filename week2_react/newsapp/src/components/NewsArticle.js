import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewsArticle({ data }) {
    return (
        <div className="news row">
            <div className="col-4">
                <img className="news__img" src={data.urlToImage}/>
            </div>
            <div className="col-8">
                <h3 className="news__title">{data.title}</h3>
                <p className="news__desc">{data.description}</p>
                <span className="news__author">{data.author}</span>
                <br/>
                <span className="news__published">{data.publishedAt}</span>
                <span className="news_source">{data.source.name}</span>
            </div>
        </div>
    )
}

export default NewsArticle
