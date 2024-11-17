import { createSlice } from '@reduxjs/toolkit';
import { fetchBlogs, createBlogAction, updateBlogAction, deleteBlogAction } from '../actions/blogsActions';

interface BlogState {
  blogs: { id: number; title: string; content: string }[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  status: 'idle',
  error: null,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch blogs';
      })
      .addCase(createBlogAction.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      })
      .addCase(updateBlogAction.fulfilled, (state, action) => {
        const index = state.blogs.findIndex((blog) => blog.id === action.payload.id);
        if (index !== -1) {
          state.blogs[index] = action.payload;
        }
      })
      .addCase(deleteBlogAction.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
      });
  },
});

export default blogsSlice.reducer;
