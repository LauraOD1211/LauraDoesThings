import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.css']
})
export class VocabComponent implements OnInit {

  message: string;
  err: string;

  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.message = "";
    this.http.post('ref',{});
  }

}
