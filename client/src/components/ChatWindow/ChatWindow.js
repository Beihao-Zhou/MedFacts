import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import Message from './Message/Message';
import Conversation from './Conversation/Conversation';
import { Typography, Button, TextField,Paper, Grid, Divider, Grow } from '@material-ui/core';

import { fetchConversations, fetchConversation } from '../../actions/conversations';
import { fetchMessages, postMessage } from '../../api';

const ChatWindow = () => {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const { conversations, conversation } = useSelector(state => state.conversations);

    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result.googleId || user?.result?._id;
    const { id: profId } = useParams();

    const scrollRef = useRef();
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = {
          sender: userId,
          text: newMessage,
          conversationId: conversation._id,
        };

        try {
          const res = await postMessage(message);
          setMessages([...messages, res.data]);
          setNewMessage("");
        } catch (err) {
          console.log(err);
        }
    };
    
    const openChat = (c) => {
        const friend = c.members.find((m) => m !== userId);
        navigate(`/profs/${friend}`);
    };

    useEffect(() => { 
        dispatch(fetchConversations(userId));
        dispatch(fetchConversation(userId, profId));
    }, [profId, dispatch]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const { data } = await fetchMessages(conversation._id);
                setMessages(data);
            } catch (error) {
                console.log(error);
            }
        };
        getMessages();
    }, [conversation]);
    

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    return (
        <Grow in>
        <Grid container spacing={3} className={classes.outer}>
            <Grid item xs={12} sm={3}>
                <Paper elevation={3}>
                    <div className={classes.chatMenuWrapper}>
                        <Typography gutterBottom variant="h5">You Contacts</Typography>
                        <Divider style={{ margin: '20px 0' }}/>
                        {conversations.map((c) => (
                            <div className={classes.contact} onClick={() => openChat(c)}>
                                <Conversation conversation={c} currentUser={userId} friend={c.members.find((m) => m !== userId)}/>
                            </div>
                        ))}
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Paper elevation={3}>
                    <div className={classes.chatBox}>
                        <div className={classes.chatBoxTop}>
                        {
                            !conversation 
                                ? <Typography gutterBottom variant='h6' color="textSecondary" align="center" style={{ marginTop: "10%"}}>Start to Consult the Professor!</Typography> 
                                : (
                                    <>
                                        {messages.map((m) => (
                                            <div ref={scrollRef}>
                                                <div ref={scrollRef} >
                                                    <Message message={m} own={m.sender === userId}/>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )
                        }
                        </div>
                        <div className={classes.chatBoxBottom}>
                            <Grid container justifyContent='center' spacing={3} direction="row" alignItems="center">
                                <Grid item xs={9} sm={10} md={10}>
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        label='Chat...'
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        value={newMessage}
                                    ></TextField>
                                </Grid>
                                <Grid item xs={3} sm={2} md={1}>
                                    <Button variant='contained' color="primary" onClick={handleSubmit}>Send</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Paper>
            </Grid>
        </Grid>
        </Grow>
    )
}

export default ChatWindow
