import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component'
import { BlogpostComponent } from '../blogpost/blogpost.component'
import { SwedishComponent } from '../swedish/swedish.component'
import { ProjectsComponent } from '../projects/projects.component'
import { VocablistComponent } from '../vocablist/vocablist.component'
import { GrammarComponent } from '../grammar/grammar.component'
import { BlogComponent } from '../blog/blog.component'

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
    },
    {
      path: 'blog',
      component: BlogComponent,
    },
    {
      path: 'blog/:id',
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
      path: 'swedish-notes/list/:id',
      component: VocablistComponent
    },
    {
      path: 'swedish-notes/grammar/:id',
      component: GrammarComponent
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