export interface Post {
    _id: string;
    message: string;
    author: string;
    likers: string[];
    createdAt?: string; 
    updatedAt?: string;
  }
  