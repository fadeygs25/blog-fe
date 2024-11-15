// src/schemas.ts
import { z } from 'zod';

export const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(10, "Content should be at least 10 characters"),
});

export type BlogFormInputs = z.infer<typeof blogSchema>;
