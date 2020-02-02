import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};
  @Input() data = [];

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area',
        background: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        hight: 60
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        TickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        TickOptions: []
      },
      series: [
        {
          data: this.data
        }
      ]
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

}
