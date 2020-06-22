import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-blogeditor',
  templateUrl: './blogeditor.component.html',
  styleUrls: ['./blogeditor.component.css']
})
export class BlogeditorComponent implements OnInit {

  constructor(private blogService: BlogService, private router:Router, private route: ActivatedRoute,private http: HttpClient,private authService: AuthService,) { }

  blog: Blog;
  id: string;
  err: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getBlogpost();
  }

  getBlogpost(): void {
    this.blogService.getBlogpost(this.id).subscribe(
      blog => {
        this.blog = blog;
      }
    );
  }
  
  onSubmit(title, topic, body){
    this.blogService.putBlogpost(this.id, title, topic, body).subscribe((res) => {
      let token = res['token'];
      if(token != "invalid"){
        this.authService.setInfo(token);
      }
      if(res['message']=="failed"){
        console.log("Something went wrong");
      }
      if(res['message']=="success"){
        console.log("Success");
        this.router.navigate(['/blog']);
      }      
    }, (e) => {
      if (e instanceof HttpErrorResponse) {
        this.err = e.error.message;
      }
    });

  }

}
