import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';

@Component({
  selector: 'app-blogedit',
  templateUrl: './blogedit.component.html',
  styleUrls: ['./blogedit.component.css']
})
export class BlogeditComponent implements OnInit {

  blogposts: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogposts();
  }

  getBlogposts(): void {
    this.blogService.getBlogposts().subscribe(
      blogposts => {
        this.blogposts = blogposts;
        console.log(this.blogposts)
      }
    );
  }
}
