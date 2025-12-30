import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDemo } from './button-demo/button-demo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonDemo],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('primeng-project');
}
