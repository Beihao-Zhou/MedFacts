import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@material-ui/core';

import NavBar from './components/NavBar/NavBar';
import Public from './components/Public/Public';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import Profs from './components/Profs/Profs';
import ChatWindow from './components/ChatWindow/ChatWindow';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Navigate replace to="/posts" />} />
          <Route path="/posts" exact element={<Public/>} />
          <Route path="/profs" exact element={<Profs/>} />
          <Route path="/profs/:id" exact element={<ChatWindow/>} />
          <Route path="/profs/search" exact element={<Profs/>} />
          <Route path="/posts/search" exact element={<Public/>} />
          <Route path="/posts/:id" exact element={<PostDetails/>} />
          <Route path="/auth" exact element={ !user ? (<Auth/>) : (<Navigate replace to="/posts" />)}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
