import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit{
  profileForm: any
  submitted = false
  username: any

  constructor(private formBuilder : FormBuilder, private router : Router)
  {
    this.profileForm = new FormGroup({
      fullname: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
      repeat: new FormControl('')
    })
  }

  ngOnInit() : void
  {
    this.profileForm = this.formBuilder.group({

      fullname: ['' , Validators.required],
      email: ['' , Validators.required],
      username: ['' , Validators.required],
      phone: ['' , Validators.required],
      password: ['' , Validators.required],
      repeat: ['' , Validators.required],
    })
  }

  get check()
  { 
    return this.profileForm.controls;
  }

  onClickSubmit(data: any) 
  {
    this.submitted = true;

    if (this.profileForm.invalid)
      return;
    
    else
    {
      this.username = data.username
      this.router.navigate(['/home/'], {
      queryParams: {username: this.username}
     })
    }

    console.warn(this.profileForm.value);
  }
}
