import { Component } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger.service';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home Page</h1>
  `
})
export class HomeComponent {
  //dependency injection
  constructor(svc:ConsoleLogger,time:number) {
    svc.warn("Component took a lot of time to load");
  }
}
