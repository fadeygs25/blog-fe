import { useFetchNotes } from '@/graphql/queries/noteQueries';
import Link from 'next/link';
import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface Note {
  id: number;
  title: string;
  content: string;
}

const NoteList = () => {
const { data: notes, isLoading, isError } = useFetchNotes();

  const columns: ColumnsType<Note> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Link href={`/notes/edit/${record.id}`}>
          <Button type="link">Edit</Button>
        </Link>
      ),
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching notes</div>;

  return (
    <div className="container mx-auto p-4">
      <Link href="/notes/add">
        <Button type="primary" className="mb-4">
          Add New Note
        </Button>
      </Link>

      <Table
        columns={columns}
        dataSource={notes}
        rowKey="id"
        pagination={{ pageSize: 5 }} 
      />
    </div>
  );
};

export default NoteList;
