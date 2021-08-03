import { Component, OnInit } from '@angular/core';
import { CovidDataService } from 'src/app/services/covid-data.service';
import { ICovidData } from 'src/app/models/covid-data';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    covidData: Observable<ICovidData[]>;
    countries: Observable<string[]>;
    dates: Observable<Date[]>;  

    constructor(private covidSvc: CovidDataService) { }

    ngOnInit(): void {    

        this.countries = this.covidSvc.getCountries();
        this.dates = this.covidSvc.getDates();
        this.covidData=this.covidSvc.getCovidData();        
    }

    doSearch(data){        
        this.covidData=this.covidSvc.search(data.country,data.sdate);
    }

}
