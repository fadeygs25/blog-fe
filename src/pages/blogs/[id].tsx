// src/pages/blog/[id].tsx
import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BlogForm from '@/components/BlogForm';
import { fetchBlogById } from '@/store/actions/blogsActions';
import { RootState } from '@/store/store';
import { useRouter } from 'next/router';

interface BlogPageProps {
  id: number;
}

const BlogPage: React.FC<BlogPageProps> = ({ id }) => {
  const dispatch = useDispatch();
  const blog = useSelector((state: RootState) => state.blogs.blogs.find((b) => b.id === id));

  const router = useRouter();

  useEffect(() => {
    if (!blog) {
      dispatch(fetchBlogById(id));
    }
  }, [dispatch, id, blog]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return <BlogForm initialData={blog} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };
  return { props: { id: parseInt(id) } };
};

export default BlogPage;
