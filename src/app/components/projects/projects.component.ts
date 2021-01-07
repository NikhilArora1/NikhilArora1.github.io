import { Component, OnInit } from '@angular/core';
declare let gtag: Function;

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
    },
    {
      name: 'IP Address Tracker',
      description: 'Let users see their own IP Address on the map on the initial page load and search for any IP addresses or domains and see key information.',
      photo: 'ip-address-tracker.png',
      stack: ['Redux', 'React'],
      url: 'http://nikhil-arora.com/ip-address-tracker',
      github: 'https://github.com/NikhilArora1/ip-address-tracker'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(url): void {
    gtag('event', 'navigation', {
      event_category: 'engagement',
      event_label: `navigate to ${url}`
    });
    window.open(url, '_blank');
  }

}
