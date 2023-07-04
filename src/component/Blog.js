import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import postsData from '../data.json'

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData.posts);
  }, []);

  return (
    <div>
      <h2>Recent Posts</h2>
      {posts.map(post => (
        <div key={post.id} className='my-4'>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Link to={`/post/${post.id}`} className='bg-red-700'>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
