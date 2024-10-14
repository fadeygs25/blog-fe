import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Note } from '../models/Note';

const API_URL = "http://localhost:3000";

export const useCreateNote = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (note: Note) => {
      const response = await fetch(`${API_URL}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['notes']); 
      },
    }
  );
};

export const useUpdateNote = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, note }: { id: number; note: Partial<Note> }) => {
      const response = await fetch(`${API_URL}/notes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['notes']); // Làm mới danh sách ghi chú sau khi cập nhật thành công
      },
    }
  );
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: number) => {
      const response = await fetch(`${API_URL}/notes/${id}`, {
        method: 'DELETE',
      });
      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['notes']); // Làm mới danh sách ghi chú sau khi xóa thành công
      },
    }
  );
};
