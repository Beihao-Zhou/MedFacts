import React, { useState } from 'react';
import { Grid, Container, Paper, Grow, TextField, Button, AppBar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Prof from './Prof/Prof';
import Pagination from '../Pagination';
import useStyles from './styles';

import { getProfsBySearch } from '../../actions/profs';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Profs = () => {
    const { profs } = useSelector((state) => state.profs);
    const [search, setSearch] = useState('');
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          searchPost();
        }
    }

    const searchPost = () => {
        if (search) {
            dispatch(getProfsBySearch(search));
            navigate(`/profs/search?searchQuery=${search || 'none'}`);
        }
    }

    return (
        <Grow in>
            <Container maxWidth='xl'>
                <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                    <Grid container justifyContent='center' spacing={3} direction="row" alignItems="center">
                        <Grid item xs={12} sm={10}>
                            <TextField 
                            name='search' 
                            variant='outlined' 
                            fullWidth 
                            label='Search Professionals' 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={handleKeyPress}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2} >
                            <Button 
                                onClick={searchPost} 
                                color='primary' variant='contained'>Search</Button>
                        </Grid>
                    </Grid>
                </AppBar>
                
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12}>
                        <Grid container alignItems='stretch' spacing={3}>
                            {
                                profs.map((prof) => (
                                    <Grid item key={prof._id} xs={12} sm={12} md={6} lg={6}>
                                        <Prof prof={prof}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>                        
                { !searchQuery && (
                    <Paper elevation={3} className={classes.pagination}>
                        <Pagination page={page} content='profs' />
                    </Paper>
                )}
            </Container>
        </Grow>
    )
}

export default Profs;
