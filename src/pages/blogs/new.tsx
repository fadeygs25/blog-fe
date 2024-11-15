import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { Button, Form, Input, Typography, message } from 'antd';
import { createBlog } from '@/store/slices/blogSlice';

interface BlogFormValues {
  title: string;
  content: string;
}

const NewBlog = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm<BlogFormValues>({
    defaultValues: { title: '', content: '' },
  });

  const onSubmit = async (data: BlogFormValues) => {
    try {
      await dispatch(createBlog(data)).unwrap();
      message.success('Blog created successfully!');
      reset(); // Reset form after successful submission
    } catch (error: any) {
      message.error(error.message || 'Failed to create blog.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <Typography.Title level={2}>Create New Blog</Typography.Title>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item label="Title" required>
          <Controller
            name="title"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Enter blog title" />}
          />
        </Form.Item>
        <Form.Item label="Content" required>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <Input.TextArea {...field} placeholder="Enter blog content" rows={4} />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewBlog;
