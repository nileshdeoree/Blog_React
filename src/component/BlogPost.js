import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../data.json';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const selectedPost = postsData.posts.find(post => post.id === parseInt(id));
    setPost(selectedPost);
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;
