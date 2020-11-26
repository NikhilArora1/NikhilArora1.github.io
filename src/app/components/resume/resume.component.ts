import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  experience;
  education;
  techStack;
  tools;

  constructor() { }

  ngOnInit(): void {
    this.experience = require('src/assets/resume/experience.json');
    this.education = require('src/assets/resume/education.json');
    this.techStack = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];
    this.tools = ['Jira', 'CircleCi', 'GitHub', ' ', 'Proto.io', 'Balsamiq'];
  }

}
