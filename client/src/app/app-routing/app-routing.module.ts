import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component'
import { BlogpostComponent } from '../blogpost/blogpost.component'
import { SwedishComponent } from '../swedish/swedish.component'
import { ProjectsComponent } from '../projects/projects.component'
import { VocablistComponent } from '../vocablist/vocablist.component'

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
    },
    {
      path: 'blog',
      component: BlogpostComponent,
    },
    { 
      path: 'swedish-notes',
      component: SwedishComponent
    },
    {
      path: 'projects',
      component: ProjectsComponent
    },
    {
      path: 'list/:id',
      component: VocablistComponent
    }
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