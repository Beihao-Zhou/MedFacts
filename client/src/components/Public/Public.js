import React, { useState } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { getPostsBySearch } from '../../actions/posts.js';
import Pagination from '../Pagination';

import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Public = () => {
    const [currentId, setCurrentId] = useState(0);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const classes = useStyles();

    const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
        searchPost();
      }
    }

    const handleAdd = (tag) => {
      setTags([...tags,tag]);
    }

    const handleDelete = (deletedTag) => {
      setTags(tags.filter((tag) => tag!==deletedTag));
    }

    const searchPost = () => {
      if (search.trim() || tags) {
        dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
        navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
      } else {
        navigate('/');
      }
    }

    return (
        <Grow in>
        <Container maxWidth='xl'>
          <AppBar className={classes.appBarSearch} position='static' color='inherit'>
            <Grid className={classes.search} container justifyContent='center' spacing={3} direction="row" alignItems="center">
              <Grid item xs={12} sm={7}>
                <TextField 
                  name='search' 
                  variant='outlined' 
                  fullWidth 
                  label='Search Titles' 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <ChipInput 
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  label='Search Tags'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button onClick={searchPost} className={classes.searchButton} color='primary' variant='contained'>Search</Button>
              </Grid>
            </Grid>
          </AppBar>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Form currentId = {currentId} setCurrentId={setCurrentId}/>
              {(!searchQuery && !tags.length) && 
                <Paper elevation={3} className={classes.pagination}>
                  <Pagination page={page} content="posts"/>
                </Paper>
              }
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Public;
