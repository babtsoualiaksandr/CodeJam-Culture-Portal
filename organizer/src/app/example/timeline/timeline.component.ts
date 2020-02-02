import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public dates = [];

  constructor() { }

  ngOnInit() {
    this.dates.push(new Date(29, 1, 2020));
    this.dates.push(new Date(2020, 12, 31));
    this.dates.push('');
    console.log(this.dates);
  }

}
