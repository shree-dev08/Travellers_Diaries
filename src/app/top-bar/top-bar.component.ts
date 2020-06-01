import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  list:any;
  // selected:any;
  // menuItem:any;
  constructor() {
    this.list = [
       'home',
       'about',
       'blog',
       'contact'
    ]; 
  }
  // select(item) {
  //   this.selected = item; 
  // };
  // isActive(item) {
  //     return this.selected === item;
  // };

  ngOnInit(): void {
  }

}
