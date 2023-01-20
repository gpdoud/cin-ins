import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  schools: any[] = [
    {
      school: "Mt. St Mary Seminary",
      degree: "Master Certificate LPM",
      year: "2016"
    },
    {
      school: "University of Cincinnati",
      degree: "BS IPS",
      year: "1985"
    },
    {
      school: "St. Xavier HS",
      degree: "College Prep",
      year: "1975"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
