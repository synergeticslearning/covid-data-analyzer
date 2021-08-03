import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFeedback } from '../models/feedback';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {

    //private baseUrl:string="https://global-covid19-service.azurewebsites.net/api/feedback";
    private baseUrl: string = "https://localhost:44304/api/feedback";

    constructor(private http: HttpClient) { }

    submitFeedback(feedback:IFeedback):Observable<IFeedback>{
        return this.http.post<IFeedback>(this.baseUrl,feedback,{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        })
    }


}
