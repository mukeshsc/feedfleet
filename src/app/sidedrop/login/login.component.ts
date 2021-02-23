import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  login: any;
  submitted = false;
  formData = new FormData();
  success: any = false;

  constructor(private formBuilder: FormBuilder, public _service:ServiceService, public router:Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    {
      this.registerForm = this.formBuilder.group({


        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        deviceToken: ['123', [Validators.required, Validators.email]],

    }, {

    });
    }

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // if (this.registerForm.invalid) {
    //     return;
    // }
  this.formData.append('email', this.registerForm.get('email').value);
  this.formData.append('password', this.registerForm.get('password').value);
  this.formData.append('deviceToken', this.registerForm.get('deviceToken').value);

  this._service.login(this.formData).subscribe(res => {
    // this.spinner.show();
    this.login = res.result;
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 5000);

    if(res.status == "1"){
      this.success= true;
      setTimeout(() => {
        this.success= false;
      }, 5000);
      this.router.navigate(['/dashboard'])
    }
    localStorage.setItem('user_id',(this.login.user_id));
    //console.log(localStorage.getItem('user_id'))
    localStorage.setItem('company_id',(this.login.company_id));

  })

}


onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
pagechange(){
  this.router.navigate(['/register'])

}
}

