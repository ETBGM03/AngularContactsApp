import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { Contact } from '../../services/types';
import { ContactService } from '../../services/contact.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const fakeData = [
  {
    "id": "6612198942c66ef35b58e4af",
    "name": "Esteban",
    "phone": "123456789",
    "comments": "this comment example",
    "type": "person"
  },
  {
    "id": "66121989934f4ee7c6f3ccb7",
    "name": "Esteban",
    "phone": "123456789",
    "comments": "this comment example",
    "type": "person"
  },
  {
    "id": "6612198901f1c4922c4eb6f5",
    "name": "Esteban",
    "phone": "123456789",
    "comments": "this comment example",
    "type": "person"
  },
  {
    "id": "661219899929f9651f07a248",
    "name": "Esteban",
    "phone": "123456789",
    "comments": "this comment example",
    "type": "person"
  },
  {
    "id": "66121989987c4498845e06f0",
    "name": "Esteban",
    "phone": "123456789",
    "comments": "this comment example",
    "type": "person"
  },
  {
    "id": "661219896b5f44a0936f61b2",
    "name": "Esteban",
    "phone": "123456789",
    "comments": "this comment example",
    "type": "person"
  }
]

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent implements OnInit {
  public contactList: Contact[] = fakeData;
  public isShowingModalDelete: boolean = false;
  public selectedOptions: string[] = ['person'];
  private modalService = inject(NgbModal);


  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContactList()
    .subscribe(response => this.contactList = fakeData);
  }

  public handleDeleteContact(contactId: string) {
    console.log(contactId);
    this.isShowingModalDelete = true;
  }

  public open(content: TemplateRef<any>) {
		this.modalService.open(content)
  };

  public toggleOption(option: string): void {
    const index = this.selectedOptions.indexOf(option);
    if (index !== -1) {
      this.selectedOptions.splice(index, 1); // Remove option if already selected
    } else {
      this.selectedOptions.push(option); // Add option if not selected
    }
  }

  public isSelected(option: string): boolean {
    return this.selectedOptions.includes(option);
  }
	


}
