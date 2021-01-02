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
      stack: ['Angular'],
      url: 'https://nikhil-arora.com/job-listings/',
      github: 'https://github.com/NikhilArora1/job-listings'
    },
    {
      name: 'Jammming',
      description: 'Allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.',
      photo: 'jammming.png',
      stack: ['React'],
      url: 'https://nikhil-arora.com/jammming/',
      github: 'https://github.com/NikhilArora1/jammming'
    },
    {
      name: 'Todo App',
      description: 'Let users add new todos to the list, mark as complete, delete from the list and filter them by all/active/complete.',
      photo: 'todo-app.png',
      stack: ['Redux', 'React'],
      url: 'http://nikhil-arora.com/todo-app/',
      github: 'https://github.com/NikhilArora1/todo-app'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(url): void {
    window.open(url, '_blank');
  }

}
