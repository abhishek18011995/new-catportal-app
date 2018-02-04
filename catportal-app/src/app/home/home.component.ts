import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userDetails;
  public trainerDetails;

  constructor(private _http: Http) { }

  ngOnInit() {

    this._http.get('/home/trainerDetails').subscribe(res => this.trainerDetails = res.json(), err => console.log(err));

    this._http.get('/home/userDetails').subscribe(res => this.userDetails = res.json(), err => console.log(err));
  }

}
