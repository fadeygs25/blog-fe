import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../store/slices/blogSlice';
import { RootState } from '../store';

const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state: RootState) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
