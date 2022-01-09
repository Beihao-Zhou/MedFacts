import React, { useEffect, useState } from 'react';
import './styles.js';
import { Avatar, Typography } from '@material-ui/core';
import useStyles from './styles';

import { fetchProf } from '../../../api/index.js';

const Conversation = ({ conversation, currentUser, friend }) => {
    const classes = useStyles();

    const [contact, setContact] = useState(null);

    useEffect(() => {
    const getUser = async () => {
        try {
          const res = await fetchProf(friend);
          setContact(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }, [currentUser, conversation]);

    return (
        <div className={classes.wrapper}>
            <Avatar className={classes.purple} alt={contact?.name} src={contact?.imageUrl} sx={{ width: 24, height: 24 }}>{contact?.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant='subtitle1'>{contact?.name}</Typography>
        </div>
    )
}

export default Conversation;