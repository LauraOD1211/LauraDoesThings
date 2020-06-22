import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogpostsUrl = 'https://lauradoesthings.com/blogposts';
  private adminUrl = 'https://lauradoesthings.com/admin/blog';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getBlogposts(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogpostsUrl);
  }

  getBlogpost(id): Observable<Blog>{
    return this.http.get<Blog>(this.blogpostsUrl+'/'+id);
  }

  deleteBlogpost(id) {
    return this.http.delete(this.adminUrl+'/delete/'+id);
  }
}
