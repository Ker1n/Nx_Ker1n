import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {TestLibComponent} from "@ker1n/test lib";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, TestLibComponent],
  selector: 'ker1n-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ker1n';
}
