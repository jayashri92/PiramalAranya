
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class EnquiryNowService {

  constructor(private database:AngularFireDatabase) { }

  addEnquiry(name:string,email:string,mobileNumber:string){
   const key =  this.database.database.ref().child("enquiries").push().key;
   debugger;
   return this.database.database.ref().child("enquiries").child(key!).update({name, email, mobileNumber})
  }

}
