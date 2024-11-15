// src/components/BlogForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { blogSchema, BlogFormInputs } from '../schemas/schemas';
import { useDispatch } from 'react-redux';
import { addBlog } from '../store/blogsSlice';
import { Blog } from '../types/Blog';
import { Input, Button, Form, Typography } from 'antd';

const BlogForm: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<BlogFormInputs>({
    resolver: zodResolver(blogSchema),
  });

  const onSubmit: SubmitHandler<BlogFormInputs> = data => {
    const newBlog: Blog = {
      id: Date.now(),
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    dispatch(addBlog(newBlog));
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
      <Form.Item label="Title" validateStatus={errors.title ? "error" : ""} help={errors.title?.message}>
        <Input {...register("title")} />
      </Form.Item>
      <Form.Item label="Content" validateStatus={errors.content ? "error" : ""} help={errors.content?.message}>
        <Input.TextArea {...register("content")} rows={4} />
      </Form.Item>
      <Button type="primary" htmlType="submit">Add Blog</Button>
    </Form>
  );
};

export default BlogForm;
