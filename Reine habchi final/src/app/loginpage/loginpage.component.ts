import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit
{
  username: any
  password: any
  formdata: any

  constructor(private service : DataService, private router: Router)
  {

  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl("issakassas"),
      password: new FormControl("angularcli")
    })
  }

  onClickSubmit(data: any)
  {
    this.username = data.username
    this.router.navigate(['/home/'], {
      queryParams: {username: this.username}
    })

  }
}
