import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  formData = new FormData();
  data : any;
  data1 : any;
  success: any = false;

  constructor(private formBuilder: FormBuilder, public _service:ServiceService, public router:Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    {
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
    }, {

    });
    }
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
  this.formData.append('email', this.registerForm.get('email').value);

  this._service.forgot_password(this.formData).subscribe(res => {
    this.data = res.result;
    if(res.status == "1"){
      this.success= true;
      setTimeout(() => {
        this.success= false;
      }, 5000);
    }
  })
}
}

