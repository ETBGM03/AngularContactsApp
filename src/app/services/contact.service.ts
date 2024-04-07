import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly _API_URL = 'https://localhost:7241/contacts';

  constructor(private http: HttpClient) {}

  private getCommonHeader(): HttpHeaders {
    return new HttpHeaders().set('Type-content', 'application/json');
  }

  public getContactList() {
    return this.http.get<Contact[]>(this._API_URL, {
      headers: this.getCommonHeader(),
    });
  }

  public getContactById(contactId: number) {
    return this.http.get(`${this._API_URL}/${contactId}`, {
      headers: this.getCommonHeader(),
    });
  }

  public addNewContact(newContact: Contact) {
    return this.http.post(`${this._API_URL}`, newContact, {
      headers: this.getCommonHeader(),
    });
  }

  public updateContact(contactId: number) {
    return this.http.patch(`${this._API_URL}/${contactId}`, {
      headers: this.getCommonHeader(),
    });
  }

  public deleteContact(contactId: number) {
    return this.http.get(`${this._API_URL}/${contactId}`, {
      headers: this.getCommonHeader(),
    });
  }
}
