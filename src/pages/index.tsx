import React from 'react';
import { SidebarProvider } from '../context/SidebarContext'; // Import SidebarProvider
import Sidebar from '@/components/Sidebar';
import BlogList from '@/components/BlogList';

const BlogListPage: React.FC = () => {
  return (
    <SidebarProvider>
      <div>
        <Sidebar />
        <h1>Blog List</h1>
        <BlogList />
      </div>
    </SidebarProvider>
  );
};

export default BlogListPage;
