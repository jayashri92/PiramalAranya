// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { EnquiryNowService } from '../services/enquiry/enquiry-now.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-enquiry',
//   templateUrl: './enquiry.component.html',
//   styleUrls: ['./enquiry.component.css']
// })
// export class EnquiryComponent {

//   enquiryForm: FormGroup = new FormGroup({
//     name: new FormControl(null, [Validators.required]),
//     email: new FormControl(null, [Validators.required]),
//     mobileNumber: new FormControl(null, [Validators.required])
//   })

//   constructor(private enquiryService: EnquiryNowService, private route: Router) { }
//   async submitEnquiryData() {
//     debugger;
//     try {
//       await this.enquiryService.addEnquiry(this.enquiryForm.value.name, this.enquiryForm.value.email, this.enquiryForm.value.mobileNumber)
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnquiryNowService } from '../services/enquiry/enquiry-now.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  @Output() closeEnquiry = new EventEmitter<void>(); // Emit event to switch back to banner

  enquiryForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    mobileNumber: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{10}$')])
  });

  isSubmitted = false;

  constructor(private enquiryService: EnquiryNowService) {}

  async submitEnquiryData() {
    if (this.enquiryForm.valid) {
      try {
        await this.enquiryService.addEnquiry(
          this.enquiryForm.value.name,
          this.enquiryForm.value.email,
          this.enquiryForm.value.mobileNumber
        );
        this.isSubmitted = true; //  Show success message
      } catch (error) {
        console.log(error);
      }
    }
  }

  closeForm() {
    this.isSubmitted = false; // Reset form when closing
    this.closeEnquiry.emit(); // Notify AppComponent to go back to banner
  }
}

