import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-batch-info',
  templateUrl: './batch-info.component.html',
  styleUrls: ['./batch-info.component.scss']
})
export class BatchInfoComponent implements OnInit {

  public batchInfo;

  constructor(private _http: Http) { }

  ngOnInit() {

    this._http.get('/batchInfo').map((res) => res.json()).subscribe(data => {
      console.log(data);
      this.batchInfo = data.sort(function (a, b) {
        const elementA = a.userName.toUpperCase(); // ignore upper and lowercase
        const elementB = b.userName.toUpperCase(); // ignore upper and lowercase
        if (elementA < elementB) {
          return -1;
        }
        if (elementA > elementB) {
          return 1;
        }

        return 0;
      });
    }, err => console.log(err));
  }

}
