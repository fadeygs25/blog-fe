import { useRouter } from 'next/router';
import { useNotes } from '../../hooks/useNotes';
import { Input, Button } from 'antd';
import { useState, useEffect } from 'react';

export default function EditNote() {
  const router = useRouter();
  const { id } = router.query;
  const { notes, updateNote } = useNotes();
  const [note, setNote] = useState({ title: '', content: '' });

  useEffect(() => {
    if (id) {
      
      const existingNote = notes.find((n) => n.id === parseInt(id));
      
      if (existingNote) {
        setNote({
          title: existingNote.title,
          content: existingNote.content,
        });
      }
    }
  }, [id, notes]);


  const handleUpdateNote = () => {
    updateNote({ ...note, id });
    router.push('/');
  };

  return (
    <div>
      <h2>Edit Note</h2>
      <Input
        placeholder="Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <Input.TextArea
        placeholder="Content"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      />
      <Button onClick={handleUpdateNote}>Save Changes</Button>
    </div>
  );
}
