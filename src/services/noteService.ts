import { Note } from '../models/Note';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchNotes = async (): Promise<Note[]> => {
    const response = await fetch(`${API_URL}/notes`);
    if (!response.ok) {
      throw new Error('Failed to fetch notes');
    }
    return response.json();
  };
  
  export const createNote = async (newNote: Note): Promise<Note> => {
    const response = await fetch(`${API_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    });
    if (!response.ok) {
      throw new Error('Failed to create note');
    }
    return response.json();
  };
  
  export const updateNote = async (id: string, updatedNote: Note): Promise<Note> => {
    const response = await fetch(`${API_URL}/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedNote),
    });
    if (!response.ok) {
      throw new Error('Failed to update note');
    }
    return response.json();
  };
  
  export const deleteNote = async (id: string): Promise<void> => {
    const response = await fetch(`${API_URL}/notes/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete note');
    }
  };