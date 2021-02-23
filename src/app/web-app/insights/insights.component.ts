import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit{
show = "false";
fg: FormGroup;
data= []
label;

str : any;
end : any;

arr = [3]
constructor() {
  this.fg = new FormGroup(
    {
      from: new FormControl(""),

      to: new FormControl("")

    },
    [Validators.required, this.dateRangeValidator]
  );
}

private dateRangeValidator: ValidatorFn = (): {
  [key: string]: any;
} | null => {
  let invalid = false;
  const from = this.fg && this.fg.get("from").value;
  console.log(from);
  const to = this.fg && this.fg.get("to").value;
  if (from && to) {
    invalid = new Date(from).valueOf() > new Date(to).valueOf();
  }
  return invalid ? { invalidRange: { from, to } } : null;
};

  ngOnInit() {
  }
  public lineChartData: ChartDataSets[] = [

    { data: [], label: 'Campaign view' },
    { data: [], label: 'Campaign view' },

  ];

public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'august','september','octuber','november','December',];
public lineChartOptions: (ChartOptions & {  }) = {
  responsive: true,
};
public lineChartColors: Color[] = [
  {
    borderColor: 'black',
    backgroundColor: 'rgba(255,0,0,0.3)',
  },
];
public lineChartLegend = true;
public lineChartType = 'line';
public lineChartPlugins = [];


startDate(e){
    e.target.value;
     console.log(e.target.value.split("-")[2])
  this.str = e.target.value.split("-")[2]

    }
    endDate(e){
      e.target.value;
      console.log(e.target.value.split("-")[2])
   this.end = e.target.value.split("-")[2]


    }

}
