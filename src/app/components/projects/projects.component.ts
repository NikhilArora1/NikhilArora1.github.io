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
    },
    {
      name: 'Jammming',
      description: 'Allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.',
      photo: 'jammming.png',
      url: 'https://nikhil-arora.com/jammming/',
      github: 'https://github.com/NikhilArora1/jammming'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(url): void {
    window.open(url, '_blank');
  }

}
