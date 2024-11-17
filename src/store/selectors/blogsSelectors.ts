import { RootState } from '../store';

export const selectAllBlogs = (state: RootState) => state.blogs.blogs;
export const selectBlogStatus = (state: RootState) => state.blogs.status;
export const selectBlogError = (state: RootState) => state.blogs.error;
