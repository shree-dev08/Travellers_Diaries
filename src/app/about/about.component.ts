import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';
import { OurTeam } from '../our-team.model';
import { OurTeamService } from '../our-team.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  blogs: Blog[] = [];
  teams: OurTeam[];
  constructor(private blogService: BlogService, private teamService: OurTeamService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.blogs.slice(0,3);
    this.teams = this.teamService.teams;
  }


}
