import { fetcher } from '../utils/apiClient';

export const getBlogs = async () => {
  return fetcher('http://localhost:8000/api/posts'); // Thay URL bằng API của bạn
};

export const addBlog = async (data: { title: string; content: string }) => {
  return fetcher('http://localhost:8000/api/posts', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
