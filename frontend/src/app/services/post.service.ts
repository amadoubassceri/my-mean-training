import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:5000/post';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(this.apiUrl);
  }

  createPost(post: Omit<Post, '_id'>) {
    return this.http.post<Post>(this.apiUrl, post);
  }

  updatePost(id: string, post: Partial<Post>) {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  likePost(id: string, userId: string) {
    return this.http.patch<Post>(`${this.apiUrl}/${id}/like`, { userId });
  }

  dislikePost(id: string, userId: string) {
    return this.http.patch<Post>(`${this.apiUrl}/${id}/dislike`, { userId });
  }
}
