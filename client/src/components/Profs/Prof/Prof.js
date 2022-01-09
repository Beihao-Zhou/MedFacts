import React from 'react';
import { Typography, Card, CardContent, ButtonBase } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { createConversation } from '../../../api';

const Prof = ({prof}) => {

  const user = JSON.parse(localStorage.getItem('profile'));
  const userId = user?.result.googleId || user?.result?._id;
  const navigate = useNavigate();

  const getChatWindow = async () => {
    const newCon = {
      senderId: userId, 
      receiverId: prof._id
    }
    const con = await createConversation(newCon);
    navigate(`/profs/${prof._id}`)
  }
    return (
        <Card style={{ display: 'flex', height: '250px' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {prof.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {prof.email}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {prof.info}
            </Typography>
            <ButtonBase onClick={getChatWindow}>
              <Typography variant="subtitle1" color="primary">
                Chat...
              </Typography>
            </ButtonBase>
          </CardContent>
        </Card>
    )
}

export default Prof
