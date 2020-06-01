import { Component, OnInit } from '@angular/core';
import { HappyTravellers } from './happy-travellers.model';
import { HappyTravellersService } from './happy-travellers.service';

@Component({
  selector: 'app-happy-travellers',
  templateUrl: './happy-travellers.component.html',
  styleUrls: ['./happy-travellers.component.css']
})
export class HappyTravellersComponent implements OnInit {
  happyTravellers: HappyTravellers[];
  constructor(private happyTravellersService: HappyTravellersService) { }

  ngOnInit(): void {
    this.happyTravellers = this.happyTravellersService.happyTravellers;
  }

}
