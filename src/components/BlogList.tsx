// src/components/BlogList.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Button, Spin } from 'antd';
import { fetchBlogs } from '@/store/actions/blogsActions';
import { selectAllBlogs } from '@/store/selectors/blogsSelectors';
import { useRouter } from 'next/router';
import { AppDispatch } from '@/store';

const BlogList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector(selectAllBlogs);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleEdit = (id: number) => {
    router.push(`/blogs/${id}`);
  };

  if (!blogs) {
    return <Spin />;
  }

  return (
    <List
      dataSource={blogs}
      renderItem={(blog) => (
        <List.Item
          key={blog.id}
          actions={[
            <Button onClick={() => handleEdit(blog.id)} type="link">
              Edit
            </Button>
          ]}
        >
          <List.Item.Meta
            title={<h3>{blog.title}</h3>}
            description={<p>{blog.content}</p>}
          />
        </List.Item>
      )}
    />
  );
};

export default BlogList;
