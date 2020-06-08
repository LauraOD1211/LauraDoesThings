import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { SwedishComponent } from './swedish/swedish.component';
import { VocablistComponent } from './vocablist/vocablist.component';
import { GrammarComponent } from './grammar/grammar.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    ProjectsComponent,
    SwedishComponent,
    VocablistComponent,
    GrammarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
