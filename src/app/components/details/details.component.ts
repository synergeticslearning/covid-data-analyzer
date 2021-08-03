import { Component, OnInit } from '@angular/core';
import { CovidDataService } from 'src/app/services/covid-data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICovidData } from 'src/app/models/covid-data';

@Component({
    selector: 'detail',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    covidData:ICovidData[];
    country: string;
    province:string;

    constructor(private covidSvc: CovidDataService, private route: ActivatedRoute) { 
        this.country = this.route.snapshot.params['country'];
        this.province = this.route.snapshot.queryParams['province'];
    }


    ngOnInit(): void {
        this.covidSvc.getCovidDataByCountry(this.country, this.province, 365)
        .subscribe(
            s=>this.covidData=s,
            e=>console.log(e)
        )
    }

}
