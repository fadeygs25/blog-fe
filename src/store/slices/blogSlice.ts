import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBlogs, addBlog } from '../../services/blogService';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  return getBlogs(); // Gọi API bằng fetch
});

export const createBlog = createAsyncThunk(
  'blogs/createBlog',
  async (blog: { title: string; content: string }) => {
    return addBlog(blog); // Gọi API bằng fetch
  }
);

interface BlogState {
  blogs: Array<{ id: number; title: string; content: string }>;
  loading: boolean;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      });
  },
});

export default blogSlice.reducer;
