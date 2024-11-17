// src/services/blogService.ts
import { API_BASE_URL } from '@/config/api';
import { fetcher } from '@/utils/apiClient';

export const getBlogs = async () => {
  return await fetcher(`${API_BASE_URL}/posts`, {
    method: 'GET',
  });
};

export const getBlogById = async (id: number) => {
  return await fetcher(`${API_BASE_URL}/posts/${id}/`, {
    method: 'GET',
  });
};

export const createBlog = async (blog: { title: string; content: string }) => {
  return await fetcher(`${API_BASE_URL}/posts/`, {
    method: 'POST',
    body: JSON.stringify(blog),
  });
};

export const updateBlog = async (blog: { id: number; title: string; content: string }) => {
  return await fetcher(`${API_BASE_URL}/posts/${blog.id}/`, {
    method: 'PUT',
    body: JSON.stringify(blog),
  });
};

export const deleteBlog = async (id: number) => {
  return await fetcher(`${API_BASE_URL}/posts/${id}/`, {
    method: 'DELETE',
  });
};
