import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth.js';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
    <Container maxWidth="xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<Home/>} />
        <Route path="/posts/search" exact element={<Home/>} />
        <Route path="/posts/:id" exact element={<PostDetails/>} />
        <Route path="/auth" exact element={!user?<Auth/>:<Home/>} />
      </Routes>
    </Container>
  </BrowserRouter>
  )
};

export default App;
