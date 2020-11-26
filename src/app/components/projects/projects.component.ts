import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [{
    name: 'Job Postings',
    description: 'A filterable job postings landing page',
    photo: 'job-postings.png',
    url: 'http://www.nikhil-arora.com/Job-Postings/',
    github: 'https://github.com/NikhilArora1/Job-Postings'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(url): void {
    window.open(url, '_blank');
  }

}
