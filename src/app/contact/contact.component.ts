import { Component } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger.service';

@Component({
  selector: 'app-contact',
  template: `
    <h1>Contact Page</h1>
  `,
  styles: []
})
export class ContactComponent{
  
  constructor(svc:ConsoleLogger) {
    svc.error("Component took a lot of time to load");
  }
}