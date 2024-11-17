import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Spin } from 'antd';
import { fetchBlogs } from '../store/actions/blogsActions';
import { selectAllBlogs } from '../store/selectors/blogsSelectors';
import { AppDispatch } from '../store';


const BlogList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector(selectAllBlogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
      <List
        dataSource={blogs}
        renderItem={(blog) => (
          <List.Item>
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
