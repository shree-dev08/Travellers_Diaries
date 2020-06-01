import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../blog.service';
import { Blog } from '../../blog.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  blogs: Blog[];
  @Input() blog: Blog;
  //selectedBlog: Blog;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.blogs;
  }

  // onSelect(blogSelect: Blog): void {
  //   this.selectedBlog = blogSelect;
  // }

}
