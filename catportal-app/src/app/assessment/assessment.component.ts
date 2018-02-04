import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  public assessmentDetails;
  constructor(private _http: Http) { }

  ngOnInit() {

    this._http.get('/assessment').map(res => res.json()).subscribe(data => {
      console.log(data);
      console.log(data[0]);
      this.assessmentDetails = data;
    }, err => console.log(err));
  }
}
