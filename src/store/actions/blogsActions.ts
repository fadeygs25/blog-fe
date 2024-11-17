import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../../services/blogService';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  return await getBlogs();
});

export const createBlogAction = createAsyncThunk(
  'blogs/createBlog',
  async (blog: { title: string; content: string }) => {
    return await createBlog(blog);
  }
);

export const updateBlogAction = createAsyncThunk(
  'blogs/updateBlog',
  async (blog: { id: number; title: string; content: string }) => {
    return await updateBlog(blog);
  }
);

export const deleteBlogAction = createAsyncThunk('blogs/deleteBlog', async (id: number) => {
  return await deleteBlog(id);
});
