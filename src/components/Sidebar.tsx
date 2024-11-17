import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { useSidebar } from '@/context/SidebarContext';

const Sidebar: React.FC = () => {
  const { isSidebarVisible, toggleSidebar } = useSidebar();
  const router = useRouter();

  const goToNewPost = () => {
    router.push('/blogs/new');
    toggleSidebar();
  };

  return (
    <div>
      <Button onClick={goToNewPost}>New Post</Button>
      <Button onClick={toggleSidebar}>Toggle Sidebar</Button>
    </div>
  );
};

export default Sidebar;
