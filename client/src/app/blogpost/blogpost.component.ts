import { Component, OnInit } from '@angular/core';
import { Blogpost } from "../blogpost";
import { BlogpostService } from '../blogpost.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
  
})

export class BlogpostComponent implements OnInit {
  blogpost: Blogpost;
  id: string;

  constructor(private route: ActivatedRoute,private blogpostService: BlogpostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getBlogpost();
  }

  getBlogpost(): void {
    this.blogpostService.getBlogpost(this.id).subscribe(
      blogpost => {
        this.blogpost = blogpost;
      }
    );
  }

}
