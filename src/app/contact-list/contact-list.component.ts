import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];

  constructor(private contactService : ContactService, private SpinnerService: NgxSpinnerService) { }

  ngOnInit(){
      this.SpinnerService.show();
      this.contactService.getContacts().subscribe((data : any[])=>{
      console.log(data);
      this.contacts = data;
      this.SpinnerService.hide();
    })
  }

}
