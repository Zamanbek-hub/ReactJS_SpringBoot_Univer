import React, { useContext } from 'react';
import { NewsContext } from "../NewsContext";
import CustomNavbar from "./CustomNavbar/CustomNavbar"
import NewsArticle from "./NewsArticle";
import Blogs from "./Blogs/Blogs"
import 'bootstrap/dist/css/bootstrap.min.css';

// import localData from "../localData"




const blogsData = [
    {
        name:"Gal Gadot", 
        urlToImage:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Gal_Gadot_2016_lighting_corrected.jpg",
        desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum", 
        posted_date:"11.02.2021 at 12:43",     
    },
    {
        name:"Tom Holland", 
        urlToImage:"https://www.indiewire.com/wp-content/uploads/2019/07/shutterstock_10312373e.jpg?w=780",
        desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum", 
        posted_date:"11.02.2021 at 12:43",     
    },
    {
        name:"Kendall Jenner", 
        urlToImage:"https://hollywoodlife.com/wp-content/uploads/2017/08/kendall-jenner-bio-photo.jpg?w=620",
        desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum", 
        posted_date:"11.02.2021 at 12:43",     
    }
]


function News(props) {
    const { data } = useContext(NewsContext);
    console.log("data = ")
    console.log(data);
    return (
        <div>
           <CustomNavbar/>
            
            <div className="row">
                <div className="all__news col-7">
                    <h3 className="head__text">All News</h3>
                    {data.articles.map((news) => (
                        <NewsArticle data={news} key={news.url}/>
                    ))
                    }
                </div>
                <div className="side__blogs col-4">
                    <h3 className="blogs__head__text">Blogs</h3>
                    {blogsData.map((news) => (
                        <Blogs data={news} key={news.url}/>
                    ))
                    }
                </div>
            </div>

            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

            <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin></script>

            <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin></script>
        </div>
    )
}

export default News
