import { useRouter } from 'next/router';
import { useNotes } from '../hooks/useNotes';
import { List, Button, Modal, Input, Spin } from 'antd';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const { notes, isLoading, addNote, deleteNote } = useNotes();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  if (isLoading) return <Spin />;

  const handleAddNote = () => {
    addNote(newNote);
    setNewNote({ title: '', content: '' });
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button onClick={() => setIsModalVisible(true)}>Add Note</Button>
      <List
        dataSource={notes}
        renderItem={(note) => (
          <List.Item
            actions={[
              <Button onClick={() => router.push(`/notes/${note.id}`)}>Edit</Button>,
              <Button onClick={() => deleteNote(note.id)}>Delete</Button>,
            ]}
          >
            {note.title}
          </List.Item>
        )}
      />
      <Modal
        title="Add New Note"
        visible={isModalVisible}
        onOk={handleAddNote}
        onCancel={() => setIsModalVisible(false)}
      >
        <Input
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <Input.TextArea
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
      </Modal>
    </div>
  );
}
