import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import useStyles from './styles';

const CustomNavbar = () => {
    const classes = useStyles();
    // const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">News Blog</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">All News <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/Sport">Sport</a>
            <a className="nav-item nav-link" href="/Politics">Politics</a>
            <a className="nav-item nav-link" href="/Technolgy">Technolgy</a>
            <a className="nav-item nav-link" href="/Business">Business</a>
            </div>
        </div>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>
    )
}

export default CustomNavbar
