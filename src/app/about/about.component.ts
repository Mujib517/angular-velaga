import { Component } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger.service';

@Component({
  selector: 'app-about',
  template: `
    <h1>About Page
  `
})
export class AboutComponent {
  constructor(svc:ConsoleLogger) {
    svc.warn("Component took a lot of time to load");
  }
}
