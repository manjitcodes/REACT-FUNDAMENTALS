
export interface Author {
  id: number;
  name: string;
  email: string;
}

export interface Comment {
  id: number;
  text: string;
  postId: number;
  authorId: number;
  createdAt: string;
  author: Author;
  post?: {
    id: number;
    title: string;
  };
}

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
  author: Author;
  comments: Comment[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  _count: {
    posts: number;
    comments: number;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  count: number;
  data: T;
}
