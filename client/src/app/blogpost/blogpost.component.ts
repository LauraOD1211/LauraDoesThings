import { Component, OnInit } from '@angular/core';
import { Blogpost } from "../blogpost";
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
  
})

export class BlogpostComponent implements OnInit {
  blogposts: Blogpost[];

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit(): void {
    this.getBlogposts();
  }

  getBlogposts(): void {
    console.log("heyo");
    this.blogpostService.getBlogposts().subscribe(
      blogposts => {
        this.blogposts = blogposts;
        console.log(this.blogposts)
      }
    );
  }

}
