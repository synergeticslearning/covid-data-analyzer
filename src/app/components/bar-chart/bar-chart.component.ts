import { Component, OnInit } from '@angular/core';
import { CovidDataService } from 'src/app/services/covid-data.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

    country: string;
    province:string;

    chartLabels: string[];
    chartData: any[] = [];
    chartType: string = 'bar';
    chartLegend: boolean = true;
    chartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    dataLoaded: boolean = false;
    // labelsLoaded:boolean=false;

    constructor(private covidSvc: CovidDataService, private route: ActivatedRoute) {
        this.country = this.route.snapshot.params['country'];
        this.province = this.route.snapshot.queryParams['province'];
    }

    ngOnInit(): void {
        this.covidSvc.getCovidDataByCountry(this.country, this.province, 30)
            .subscribe(
                result => {
                    let label =this.province?`${this.country} (${this.province})`:this.country;
                    let dates = result.map(s => s.date);
                    this.chartLabels = dates.map(d => new Date(d).toLocaleDateString());
                    this.chartData.push({ data: result.map(s => s.confirmed), label: label });
                    let maxValue = Math.max(...this.chartData[0].data);                    
                    maxValue = Math.round(maxValue + (maxValue*10/100));                  
                    this.chartOptions.scales = {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                stepValue: 50,
                                steps: 20,
                                max: maxValue,
                            }
                        }]
                    }
                    this.dataLoaded = true;
                }
            )

    }

}
