import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { VocabComponent } from './vocab/vocab.component';
import { GrammarComponent } from './grammar/grammar.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { LogoutComponent } from './logout/logout.component';
import { BlogeditComponent } from './blogedit/blogedit.component';
import { BlogdeleteComponent } from './blogdelete/blogdelete.component';
import { BlogeditorComponent } from './blogeditor/blogeditor.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'blog/edit',
    component: BlogeditComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'blog/edit/:id',
    component: BlogeditorComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'blog/delete',
    component: BlogdeleteComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'vocab',
    component: VocabComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'grammar',
    component: GrammarComponent,
    canActivate: [AuthGuardGuard]
  },
  { 
    path: 'logout', 
    component: LogoutComponent, 
    canActivate: [AuthGuardGuard]
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardGuard]
})
export class AppRoutingModule { }
