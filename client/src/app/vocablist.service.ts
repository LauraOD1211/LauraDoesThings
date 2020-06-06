import { Injectable } from '@angular/core';
import { Vocablist } from './vocablist';
import { Vocab } from './vocab';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VocablistService {
  private vocablistsUrl = 'vocab';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getVocablists(): Observable<Vocablist[]> {
    return this.http.get<Vocablist[]>(this.vocablistsUrl);
  }
  getVocablist(id): Observable<Vocablist> {
    return this.http.get<Vocablist>(this.vocablistsUrl+"/"+id);
  }
  getVocab(id): Observable<Vocab> {
    return this.http.get<Vocab>(this.vocablistsUrl+"/vocab/"+id);
  }
  getVocabs(id): Observable<Vocab[]> {
    return this.http.get<Vocab[]>(this.vocablistsUrl+"/list/"+id);
  }
}
