import { Injectable } from '@angular/core';
import { Blogpost } from './blogpost';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  private blogpostsUrl = 'blogposts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getBlogposts(): Observable<Blogpost[]> {
    return this.http.get<Blogpost[]>(this.blogpostsUrl);
  }
}
