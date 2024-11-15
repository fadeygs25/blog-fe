import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../store/slices/blogSlice';
import { RootState } from '../store';
import { List, Spin } from 'antd';

const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state: RootState) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <Spin spinning={loading} tip="Loading blogs...">
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
    </Spin>
  );
};

export default BlogList;
