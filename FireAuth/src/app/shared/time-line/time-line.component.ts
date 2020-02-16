import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
  tomorrow = new Date(2017, 9, 20, 14,34);
  myDate = new Date(2019, 9, 20, 14,34);
  dates = [new Date(2017, 9, 20, 14,34) , new Date(2018, 9, 20, 14,34), new Date(2019, 9, 20, 14,34)];

  constructor() { }

  ngOnInit() {
  }

}
