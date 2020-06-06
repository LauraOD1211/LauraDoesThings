import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component'
import { BlogpostComponent } from '../blogpost/blogpost.component'

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
    },
    {
      path: 'blog',
      component: BlogpostComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }