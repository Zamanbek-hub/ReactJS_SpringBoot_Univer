import React from 'react';
import {AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography, Toolbar} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import { Link, useLocation } from "react-router-dom";

import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar className={classes.AppBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" component={Link} to="/" className={classes.appBar} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Online-Shop
                    </Typography>
                    <div className={classes.grow}></div>
                    {location.pathname == "/" && ( // and operator we can execute below code
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar> 
        </>
    )
}

export default Navbar
