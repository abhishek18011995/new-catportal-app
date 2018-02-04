import { Component, OnInit, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormBuilder, FormControlName } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { UserDetails } from './userDetails';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginModal') loginModal: ModalDirective;
  public loginDetail: FormGroup;
  public emptyLoginDetail = false;
  public incorrectLoginDetail = false;
  public loginClicked = false;
  public test;

  constructor(private fb: FormBuilder, private _http: Http, private router: Router) { }

  ngOnInit() {

    this.loginDetail = this.fb.group({
      userId: new FormControl(''),
      password: new FormControl('')
    });
    // console.log(this.loginModal);
  }

  public onLogin() {

    this.loginClicked = true;
    this.incorrectLoginDetail = false;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (this.loginDetail.controls.userId.value && this.loginDetail.controls.password.value && this.loginDetail.valid) {

      this.emptyLoginDetail = false;

      this._http.post('/login', JSON.stringify(this.loginDetail.value), { headers: headers })
        .map((res) => res.json()).subscribe(val => {
          console.log(val);
          if (val) {
            this.incorrectLoginDetail = false;
            this.router.navigate(['/home']);
          } else {

            this.incorrectLoginDetail = true;
          }
        }, error => {
          console.log(error);
          this.incorrectLoginDetail = true;
        });

    } else {
      this.emptyLoginDetail = true;

    }
  }

}
