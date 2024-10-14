import { useQuery } from '@tanstack/react-query';
import { Note } from '../models/Note';

const API_URL = "http://localhost:3000";

const fetchNotes = async (): Promise<Note[]> => {
  const response = await fetch(`${API_URL}/notes`);
  return response.json();
};

export const useFetchNotes = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
  });
};
