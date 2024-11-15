import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Blog } from '../types/blog'; // Đảm bảo Blog type đã được định nghĩa ở đâu đó

// Giả sử bạn có API như sau (thay bằng API thật của bạn):
const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await fetch('/api/blogs');
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return response.json();
};

const createBlog = async (newBlog: Blog): Promise<Blog> => {
  const response = await fetch('/api/blogs', {
    method: 'POST',
    body: JSON.stringify(newBlog),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to create blog');
  }
  return response.json();
};

export const useBlogs = () => {
  const queryClient = useQueryClient();

  // Query để lấy danh sách blog
  const { data: blogs, isLoading, isError, error } = useQuery<Blog[], Error>({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  // Mutation để thêm một blog mới
  const { mutate: addBlog, isLoading: isAdding } = useMutation(createBlog, {
    onSuccess: () => {
      // Sau khi thành công, refetch lại dữ liệu blogs
      queryClient.invalidateQueries(['blogs']);
    },
  });

  return {
    blogs,
    isLoading,
    isError,
    error,
    addBlog,
    isAdding,
  };
};
