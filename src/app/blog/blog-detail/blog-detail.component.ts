import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/blog.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.component.html',
    styleUrls: ['./blog-detail.component.css']
  })
export class BlogDetailComponent implements OnInit{
  @Input() blog: Blog;

    constructor(private route:ActivatedRoute,private blogService: BlogService,private location: Location){}
    
    ngOnInit(){
      this.getBlog();
    }

    getBlog(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.blogService.getBlog(id).subscribe(blogSelect => this.blog = blogSelect);
    }
  
    goBack(): void {
      this.location.back();
    }
}