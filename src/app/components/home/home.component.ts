import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  techStack;
  tools;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.techStack = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];
    this.tools = ['Jira', 'CircleCi', 'GitHub', ' ', 'Proto.io', 'Balsamiq'];
  }

  mail(): void {
    location.href = 'mailto:nikarora@live.com';
  }

  scrollToIntro(): void {
    location.href = '#about-me';
  }

}
