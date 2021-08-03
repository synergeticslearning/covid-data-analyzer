import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    @Input("countries") countiesList:Observable<string[]>;
    @Input("dates") datesList:Observable<Date[]>;
    @Output("search") search:EventEmitter<any>=new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    searchData(country:string, sdate:Date){
        this.search.emit({country,sdate});
    }

}
