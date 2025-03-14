import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piramalAranya';

  currentComponent = 'banner'; // Set default to 'banner'

  setComponent(componentName: string) {
    this.currentComponent = componentName; // Switch component
  }

}
