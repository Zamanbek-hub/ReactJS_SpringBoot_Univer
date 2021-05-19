import React from 'react';
import axios from "axios";
import { useState,  useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import queryString from 'query-string';




function Favorites() {
    const QUEST_FAVORITES_GET_API = "http://localhost:8000/quest/favorites";
    const location = useLocation();
    const query = queryString.parse(location.search);

    const [favorites, setFavorites] = useState([]);
    const getFavorites = () => {
        
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }   

        axios.get(QUEST_FAVORITES_GET_API+`?quest_id=${query.quest_id}`, {headers: headers}).then(res => {
            setFavorites(res.data)
        });
    }

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <div className='container'>
            <table class="table mt-3">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {favorites.map((favorite, i) => 
                    <tr>
                    <th scope="row">{i+1}</th>
                    <td>{favorite.full_name}</td>
                    <td>{favorite.email}</td>
                    </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Favorites
