import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  message: string;
  err: string;

  constructor(private http: HttpClient, private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
    this.message = "";
    this.http.post('ref',{});
  }

  onSubmit(title, topic, body) {
    return this.http.post('blog', {title, topic, body}).subscribe((res) => {
      this.authService.resetInfo(res['token']);
      if(res['message'] == "success"){
        console.log("Success");
        this.message = ("Posted successfully!!!");
      }
      else{
        console.log("Failed");
        this.message = ("Something went wrong");
      }
    }, (e) => {
      if (e instanceof HttpErrorResponse) {
        this.err = e.error.message;
      }
    });
  };

}
