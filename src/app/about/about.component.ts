import { Component } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger.service';

@Component({
  selector: 'app-about',
  template: `
    <h1>About Page</h1>

    <h3>{{count}}</h3>

    <button (click)="inc()">++</button>
  `
})
export class AboutComponent {
  count: number = 0;

  inc() {
    this.count++;
  }

  constructor() {
    this.count++;
  }
}
