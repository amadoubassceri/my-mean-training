import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  private postService = inject(PostService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  postForm = new FormGroup({
    message: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required])
  });

  isEdit = false;
  postId?: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      if (this.postId) {
        this.isEdit = true;
        this.postService.getPosts().subscribe(posts => {
          const post = posts.find(p => p._id === this.postId);
          if (post) this.postForm.patchValue(post);
        });
      }
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const formData: Omit<Post, '_id'> = {
        message: this.postForm.value.message as string, 
        author: this.postForm.value.author as string,
        likers: [], 
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
  
      const operation = this.isEdit
        ? this.postService.updatePost(this.postId!, formData)
        : this.postService.createPost(formData);
  
      operation.subscribe(() => this.router.navigate(['/']));
    }
  }
  


}

  
