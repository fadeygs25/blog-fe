// src/components/BlogForm.tsx
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { blogSchema } from '@/validations/blogValidation';
import { createBlogAction, updateBlogAction } from '@/store/actions/blogsActions';

interface BlogFormProps {
  initialData?: { id: number; title: string; content: string };
}

const BlogForm: React.FC<BlogFormProps> = ({ initialData }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Handle form submit
  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const validatedData = blogSchema.parse(values); // Validate the form data using Zod
      if (initialData) {
        // Update existing blog
        await dispatch(updateBlogAction({ ...validatedData, id: initialData.id }));
        message.success('Blog updated successfully');
      } else {
        // Create new blog
        await dispatch(createBlogAction(validatedData));
        message.success('Blog created successfully');
      }
      router.push('/'); // Redirect to home or any page after successful submission
    } catch (error) {
      message.error('Error while submitting the form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      initialValues={initialData}
      onFinish={handleSubmit}
      layout="vertical"
      style={{ maxWidth: '600px', margin: '0 auto' }}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: 'Title is required' }]}
      >
        <Input placeholder="Enter blog title" />
      </Form.Item>
      
      <Form.Item
        name="content"
        label="Content"
        rules={[{ required: true, message: 'Content is required' }]}
      >
        <Input.TextArea rows={4} placeholder="Enter blog content" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          style={{ width: '100%' }}
        >
          {initialData ? 'Update Blog' : 'Create Blog'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogForm;