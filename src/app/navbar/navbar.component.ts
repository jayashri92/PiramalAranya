// import { Component, EventEmitter, Output } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {

//   constructor(private router: Router) { }

//   // enquireNow(){
//   //   this.router.navigateByUrl('enquireNow')
//   // }

//   @Output() changeComponent = new EventEmitter<string>();

//   selectComponent(componentName: string) {
//     this.changeComponent.emit(componentName); // Emit the selected component
//   }

//   scrollToSection(sectionId: string) {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start'})
//     }
//   }
// }
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() changeComponent = new EventEmitter<string>();

  selectComponent(componentName: string) {
    this.changeComponent.emit(componentName); // Notify AppComponent to show Enquiry
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse'); // Select the mobile menu
    if (navbar?.classList.contains('show')) {
      navbar.classList.remove('show'); // Remove 'show' class to close navbar
    }
  }
}
