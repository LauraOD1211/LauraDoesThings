import { Component, OnInit } from '@angular/core';
import { Blogpost } from "../blogpost";
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogposts: Blogpost[];

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit(): void {
    this.getBlogposts();
  }

  getBlogposts(): void {
    this.blogpostService.getBlogposts().subscribe(
      blogposts => {
        this.blogposts = blogposts;
        console.log(this.blogposts)
      }
    );
  }
}
