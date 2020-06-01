import { Blog } from './blog.model';
import { Injectable,EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { BLOGS } form './mock'
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class BlogService{
    blogSelected = new EventEmitter<Blog>();
    
    constructor( private sanitizer: DomSanitizer) {}
    blogs: Blog[] = [
                   new Blog(1,
                            'Blog 1',
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'\standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            this.sanitizer.bypassSecurityTrustResourceUrl('assets\\images\\andaman.jpg')
                        ),
                    new Blog(2,
                            'Blog 2',
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'\standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            this.sanitizer.bypassSecurityTrustResourceUrl('assets\\images\\gokarna.jpg')
                        ),
                    new Blog(3,
                            'Blog 3',
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'\standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            this.sanitizer.bypassSecurityTrustResourceUrl('assets\\images\\Goa2.jpg')
                        ),
                    new Blog(4,
                            'Blog 4',
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'\standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            this.sanitizer.bypassSecurityTrustResourceUrl('assets\\images\\shimla.jpg')
                        ),
                    new Blog(5,
                            'Blog 5',
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'\standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                            this.sanitizer.bypassSecurityTrustResourceUrl('assets\\images\\KOVALAM.jpg')
                    ),
                         
    ]

    getBlogs(): Observable<Blog[]> {
        // TODO: send the message _after_ fetching the heroes
        //this.messageService.add('HeroService: fetched heroes');
        return of(this.blogs);
      }
    
      getBlog(id: number): Observable<Blog> {
        // TODO: send the message _after_ fetching the hero
        //this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(this.blogs.find(blogFind => blogFind.id === id));
      }
}