 import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';

export const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'new', component: PostFormComponent },
    { path: 'edit/:id', component: PostFormComponent },
    { path: '**', redirectTo: '' } 
  ];
  