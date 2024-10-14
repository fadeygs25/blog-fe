import create from 'zustand';
import { Note } from '../models/Note';

interface NoteStore {
  notes: Note[];
  addNote: (note: Note) => void;
  updateNote: (note: Note) => void;
  deleteNote: (id: number) => void;
}

export const useNoteStore = create<NoteStore>((set) => ({
  notes: [],
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  updateNote: (updatedNote) =>
    set((state) => ({
      notes: state.notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)),
    })),
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
}));
