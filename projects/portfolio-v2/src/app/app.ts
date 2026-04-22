import { Component, signal } from '@angular/core';

@Component({
  selector: 'pfv2-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-v2');
}
