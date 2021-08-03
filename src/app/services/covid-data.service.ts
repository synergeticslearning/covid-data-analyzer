import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICovidData } from '../models/covid-data';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CovidDataService {

    //private baseUrl:string="https://global-covid19-service.azurewebsites.net/api/covid";
    private baseUrl:string="https://localhost:5001/api/covid";

    constructor(private http: HttpClient) { }

    getCovidData(days:number=1):Observable<ICovidData[]>{        
        return this.http.get<ICovidData[]>(`${this.baseUrl}/data?days=${days}`);
    }

    getCountries():Observable<string[]>{
        return this.http.get<string[]>(`${this.baseUrl}/countries`);
    }

    getDates():Observable<Date[]>{
        return this.http.get<Date[]>(`${this.baseUrl}/dates`); 
    }

    search(country:string, sdate:Date):Observable<ICovidData[]>{
        return this.http.get<ICovidData[]>(`${this.baseUrl}/search?country=${country}&date=${sdate}`);
    }

    getCovidDataByCountry(country:string, province:string, days:number):Observable<ICovidData[]>{
        let url=`${this.baseUrl}/country/${country}`;
        if(province && days){
            url = `${url}?province=${province}&days=${days}`
        }else if(days){
            url = `${url}?days=${days}`            
        }
        else if(province){
            url=`${url}&province=${province}`
        }
        return this.http.get<ICovidData[]>(url);
    }
}
