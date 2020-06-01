import { Component, OnInit } from '@angular/core';
// import { BlogService } from '../blog.service';
// import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  // blogs: Blog[];

  // constructor(private blogService: BlogService) { }

  // ngOnInit(): void {
  //   this.blogs = this.blogService.blogs;
  //   this.getBlogs();
  // }

  // getBlogs(): void {
  //   this.blogService.getBlogs().subscribe(blogs => this.blogs =blogs);
  //     }

  constructor(){}

  ngOnInit(){

  }


}
