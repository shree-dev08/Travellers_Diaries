import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  submitted = false;

  // onSubmit() { 
  //   this.submitted = true; 
  // }

  preference = ['Hill Stations','Beaches','Forests','Deserts']; 
  userModel = new User('','','',this.preference[1],'',true);

  newUser() {
    this.userModel = new User('','','',this.preference[1],'',true);
  }

}
