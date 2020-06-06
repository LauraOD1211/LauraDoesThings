import { Injectable } from '@angular/core';
import { Grammar } from './grammar';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrammarService {
  private grammarUrl = 'grammarpost';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getGrammars(): Observable<Grammar[]> {
    return this.http.get<Grammar[]>(this.grammarUrl);
  }
  getGrammar(id): Observable<Grammar> {
    return this.http.get<Grammar>(this.grammarUrl+"/"+id);
  }
}