// src/pages/new.tsx
import React from 'react';
import BlogForm from '@/components/BlogForm';

const NewBlogPage: React.FC = () => {
  return (
    <div>
      <h1>Create New Blog</h1>
      <BlogForm />
    </div>
  );
};

export default NewBlogPage;
