import { Component, OnInit, Inject} from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

export interface DialogData {
  title: string;
  id: string;
}

@Component({
  selector: 'app-blogdelete',
  templateUrl: './blogdelete.component.html',
  styleUrls: ['./blogdelete.component.css']
})
export class BlogdeleteComponent implements OnInit {

  blogposts: Blog[];

  constructor(private blogService: BlogService, public dia: MatDialog) { }

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

  onDelete(title, id){
    const dialogRef = this.dia.open(Dialog, {
      width: '250px',
      data: {title: title, id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'dialog-box',
  templateUrl: './dialog.html',
})
export class Dialog {
  token: string;
  err: string;

  constructor(private http: HttpClient,
    private authService: AuthService,
    private blogService: BlogService,
    public dia: MatDialog,
    public dialogRef: MatDialogRef<Dialog>,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    console.log("no")
    this.dialogRef.close();
  }
  onYesClick(id): void {
    
    this.blogService.deleteBlogpost(id).subscribe((res) => {
      let token = res['token'];
      if(token != "invalid"){
        this.authService.setInfo(token);
      }
      if(res['message']=="failed"){
        console.log("Something went wrong");
        this.dialogRef.close();
      }
      if(res['message']=="success"){
        console.log("Success");
        this.dialogRef.close();
        this.router.navigate(['/blog']);
      }
      
      
    }, (e) => {
      if (e instanceof HttpErrorResponse) {
        this.err = e.error.message;
      }
    });
  }

}