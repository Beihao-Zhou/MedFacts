import React, { useEffect, useState } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../actions/posts';
import { getProfs } from '../actions/profs';

import useStyles from './styles';

const Paginate = ({ page, content }) => {
    const { numberOfPages: postNumberOfPages } = useSelector((state) => state.posts);  
    const { numberOfPages: profNumberOfPages } = useSelector((state) => state.profs);   
    console.log(content);
    console.log(postNumberOfPages);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(page) {
            if (content==='profs') { 
                dispatch(getProfs(page));
            };
            if (content==='posts') { 
                dispatch(getPosts(page));
            };
        }
    }, [dispatch, page, content]);

    return (
        <Pagination 
            classes={{ ul: classes.ul }} 
            count={content === 'posts' ? postNumberOfPages : profNumberOfPages }
            page={Number(page) || 1}
            variant='outlined'
            color='primary'
            renderItem={(item)=> (
                <PaginationItem {...item} component={Link} to={`/${content}?page=${item.page}`}/>
        )} />
    )
};

export default Paginate;