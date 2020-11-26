import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  home(): void {
    this.router.navigate(['']);
  }

  resume(): void {
    this.router.navigate(['/resume']);
  }

  navigateTo(page): void {
    this.router.navigate([page]);
  }

  mail(): void {
    location.href = 'mailto:nikarora@live.com';
  }
}
