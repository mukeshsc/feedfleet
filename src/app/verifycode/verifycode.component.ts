import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';
@Component({
  selector: 'app-verifycode',
  templateUrl: './verifycode.component.html',
  styleUrls: ['./verifycode.component.scss']
})
export class VerifycodeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  data:any;
  dataOne:any;
  mail: any;
  timeLeft: number = 240;
    interval;
    minute:any;
    second:any
  constructor(private formBuilder: FormBuilder, public _service:ServiceService, public router:Router,private toastr: ToastrService) { }
  formData = new FormData();

  ngOnInit(): void {
    this.toastr.success('enter code', 'registration complete!');
    this.startTimer()
    {
      this.registerForm = this.formBuilder.group({



        SecurityCode: ['', [Validators.required, Validators.minLength(6)]],

        deviceToken: ['123', Validators.required],

    }, {

    });
    }

  }

  get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  this.formData.append('SecurityCode', this.registerForm.get('SecurityCode').value);
  this.formData.append('deviceToken', this.registerForm.get('deviceToken').value);
  this.formData.append('email', localStorage.getItem('email'));


  this._service.VerifyCode(this.formData).subscribe(response =>  {
    this.data = response
    this.mail = ( localStorage.getItem( 'email' ) );
    console.log(this.mail)
  if(this.data){
    if(this.data.status == "1"){
      this.toastr.success('verified!', 'user');
    }
    else{

      this.toastr.error('something went wrong!', 'invalid code');
     }
  }
  }
  ),
  (err) => console.log(err)


}

reCode(){
  this.formData.append('email', localStorage.getItem('email'));


  // this._service.resendCode(this.formData).subscribe(res => console. log(res))
  this._service.resendCode(this.formData).subscribe(res => {
    this.dataOne = res;
    console.log(this.dataOne)
  })
}


startTimer() {
  this.interval = setInterval(() => {
    if(this.timeLeft > 0) {
      this.timeLeft--;
      this.minute = Math.floor(this.timeLeft / 60);
      this.second = this.timeLeft - this.minute * 60;
    } else {
      this.timeLeft = 60;

    }
  },1000)

}

}

