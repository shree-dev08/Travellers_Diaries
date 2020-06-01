import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menu1 = 'our-story';
  public menu2 = 'our-team';
  public menu3 = 'trips';
  public menu4 = 'upcoming-trips';
  public menu5 = 'happy-travellers';

  constructor() { 
  }

  ngOnInit(): void {
  }

}
