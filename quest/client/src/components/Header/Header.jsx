import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';

function Header() {
    const history = useHistory();
    const nav_link_style = {
        color: "white",
    }

    const nav_style = {
        backgroundColor: '#008B8A'
    }

    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={nav_style}>
                <a className="navbar-brand" href="/" style={nav_link_style}>Quest</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">


                        { ! localStorage.getItem('jwtToken') &&
                            <li className="nav-item">
                                <a className="nav-link" href="/login" style={nav_link_style}>Login</a>
                            </li>
                        }

                        { ! localStorage.getItem('jwtToken') &&
                            <li className="nav-item">
                                <a className="nav-link" href="/register" style={nav_link_style}>Register</a>
                            </li>
                        }

                        { localStorage.getItem('email') &&
                            <li className="nav-item">
                                <a type="button" className="nav-link" style={nav_link_style}>{localStorage.getItem('email') }</a>
                            </li>
                        }

                        { localStorage.getItem('jwtToken') &&
                            <li className="nav-item">
                                <a type="button" className="nav-link" style={nav_link_style}  onClick={e => { e.preventDefault(); {localStorage.removeItem('jwtToken'); localStorage.removeItem('email'); history.push("/login")}}}>Logout</a>
                            </li>
                        }

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
