import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
    selector: 'feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

    form:FormGroup;

    constructor(private fb:FormBuilder, private fsvc:FeedbackService) {
        this.form=this.fb.group({
            name:["", Validators.compose([Validators.required, Validators.maxLength(50)])],
            email:["", Validators.compose([Validators.required, Validators.email, Validators.maxLength(50)])],
            feedback:["", Validators.compose([Validators.required, Validators.maxLength(1000)])]
        })
     }

    ngOnInit(): void {
        
    }

    public get Name()  {
        return this.form.controls['name'];
    }
    public get Email()  {
        return this.form.controls['email'];
    }
    public get Feedback()  {
        return this.form.controls['feedback'];
    }

    save(){
        if(this.form.valid){
            this.fsvc.submitFeedback(this.form.value)
            .subscribe(
                res=>{
                    alert("Feedback submitted, thank you!");
                    this.Name.setValue("");
                    this.Email.setValue("");
                    this.Feedback.setValue("");
                    this.form.reset();
                },
                err=>alert("Error in submitting feedback")
            )
        }
    }

}
