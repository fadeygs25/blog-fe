import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNoteStore } from '../store/noteStore';
import { fetchNotes, createNote, updateNote, deleteNote } from '../services/noteService';

export const useNotes = () => {
  const queryClient = useQueryClient();
  const { setNotes } = useNoteStore();

  const { data, isLoading } = useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
    onSuccess: (data) => {
      setNotes(data);
    },
  });

  const addNoteMutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries(['notes']);
    },
  });

  const updateNoteMutation = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries(['notes']);
    },
  });

  const deleteNoteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries(['notes']);
    },
  });

  return {
    notes: data,
    isLoading,
    addNote: addNoteMutation.mutate,
    updateNote: updateNoteMutation.mutate,
    deleteNote: deleteNoteMutation.mutate,
  };
};
