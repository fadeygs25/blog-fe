import React from 'react';
import BlogList from '../components/BlogList'; // Import BlogList từ components

const BlogListPage: React.FC = () => {
  return (
    <div>
      <h1>Blog List</h1>
      <BlogList />
    </div>
  );
};

export default BlogListPage;
