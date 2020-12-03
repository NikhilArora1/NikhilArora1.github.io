import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Job Listings',
      description: 'Job Listings using GitHub Jobs API',
      photo: 'job-listings.png',
      url: 'https://nikhil-arora.com/job-listings/',
      github: 'https://github.com/NikhilArora1/job-listings'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(url): void {
    window.open(url, '_blank');
  }

}
