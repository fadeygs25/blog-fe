// src/store/actions/blogsActions.ts
import { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '@/services/blogService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  return await getBlogs();
});

export const fetchBlogById = createAsyncThunk('blogs/fetchBlogById', async (id: number) => {
  return await getBlogById(id);
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
