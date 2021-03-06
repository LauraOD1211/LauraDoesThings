import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { VocabComponent } from './vocab/vocab.component';
import { GrammarComponent } from './grammar/grammar.component';
import { LogoutComponent } from './logout/logout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { BlogeditComponent } from './blogedit/blogedit.component';
import { BlogdeleteComponent } from './blogdelete/blogdelete.component';
import { BlogeditorComponent } from './blogeditor/blogeditor.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    BlogComponent,
    VocabComponent,
    GrammarComponent,
    LogoutComponent,
    BlogeditComponent,
    BlogdeleteComponent,
    BlogeditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    StorageServiceModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
