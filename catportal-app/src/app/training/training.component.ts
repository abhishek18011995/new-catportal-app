import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {


  public trainingDetails;

  constructor(private _http: Http) { }

  ngOnInit() {

    this._http.get('/training').map(res => res.json()).subscribe(data => {
      console.log(data);
      this.trainingDetails = data;
    });
  }

}
