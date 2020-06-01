import { Component, OnInit } from '@angular/core';
import { OurTeam } from '../our-team.model';
import { OurTeamService } from '../our-team.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  teams: OurTeam[];

  constructor(private ourTeamService: OurTeamService) { }

  ngOnInit(): void {
    this.teams = this.ourTeamService.teams;
  }

}
