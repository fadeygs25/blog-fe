import React from 'react';
import Sidebar from '@/components/Sidebar';
import BlogList from '@/components/BlogList';
import { SidebarProvider } from '@/context/SidebarContext';

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

export default React.memo(BlogListPage);
