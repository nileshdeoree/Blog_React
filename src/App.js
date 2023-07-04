import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './component/Blog';
import BlogPost from './component/BlogPost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Blog/>} />
        <Route path="/post/:id" exact element={<BlogPost/>} />
      </Routes>
    </Router>
  );
};

export default App;