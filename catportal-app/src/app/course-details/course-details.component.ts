import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  public courseDetails;

  constructor(private _http: Http, private route: ActivatedRoute) { }

  ngOnInit() {

    this._http.get('/courseDetails').map((res) => res.json()).subscribe(data => {
      console.log(data);
      this.courseDetails = data;
    }, err => console.log(err));
  }

}
