import { create } from 'zustand';
import { Note } from '../models/Note';

interface NoteState {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
  addNote: (note: Note) => void;
  updateNote: (id: string, updatedNote: Note) => void;
  deleteNote: (id: string) => void;
}

export const useNoteStore = create<NoteState>((set) => ({
  notes: [],
  setNotes: (notes) => set(() => ({ notes })),
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  updateNote: (id, updatedNote) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? updatedNote : note
      ),
    })),
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
}));
