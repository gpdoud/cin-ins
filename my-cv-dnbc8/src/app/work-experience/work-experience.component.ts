import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperiences: any = [
    {
      company: "MAX",
      job: "Instructor",
      time: "2016-2017",
      values: [
        "Started Angular curriculum",
        "Enhanced the boot camp curriculum"
      ]
    },
    {
      company: "TIY",
      job: "Instructor",
      time: "2016-2017",
      values: [
        "Started Angular curriculum",
        "Enhanced the boot camp curriculum"
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
