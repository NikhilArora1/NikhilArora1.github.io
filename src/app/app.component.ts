import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-EJ5MG03DDE',
        {
          page_path: event.urlAfterRedirects
        });
      }
    });
  }

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
