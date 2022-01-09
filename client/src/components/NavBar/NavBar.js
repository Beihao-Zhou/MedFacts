import React, { useState,useEffect } from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from './styles';
import Medfacts from '../../images/MedFacts.png';


const NavBar = () => {
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate('/auth');
        setUser(null);
    };
    
    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location])
    return (
        <AppBar className={classes.appBar} position="fixed" color="inherit">
            <div className={classes.brandContainer}>
                <img src={Medfacts} alt="MedFacts" height="70" />
            </ div>
            <Toolbar className={classes.toolbar}>
                <div className={classes.menu}>
                    <Typography component={Link} to="/posts" variant="h6" className={classes.menuItem}>PUBLIC</Typography>
                    <Typography component={Link} to="/profs" variant="h6" className={classes.menuItem}>PROFESSIONALS</Typography>
                </div>
                { user? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} sx={{ width: 24, height: 24 }}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant='subtitle1'>{user.result.name}</Typography>
                        <Button variant='contained' color='secondary' onClick={logout}>Log Out</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant='contained' color='primary'>Sign in</Button>
                ) }
            </Toolbar>
      </AppBar>
    )
}

export default NavBar
