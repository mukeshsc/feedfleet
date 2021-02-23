import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { RecaptchaModule} from 'angular-google-recaptcha';
import { MustMatch } from './mustmatch';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  data: any
  signup: any = [];

  formData = new FormData();

  // myRecaptcha: boolean

  constructor(private formBuilder: FormBuilder, public _service:ServiceService, public router:Router) { }

    ngOnInit()
     {
      this.registerForm = this.formBuilder.group({

        fullName: ['', Validators.required],
        company_Name: ['', Validators.required],
        deviceToken: ['123', Validators.required],


        // validates date format yyyy-mm-dd

        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm_Password: ['', Validators.required],

    }, {
        validator: MustMatch('password', 'confirm_Password')
    });
    }
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
         alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        this.formData.append('fullname', this.registerForm.get('fullName').value);
        this.formData.append('company_name', this.registerForm.get('company_Name').value);
        this.formData.append('email', this.registerForm.get('email').value);
        this.formData.append('password', this.registerForm.get('password').value);
        this.formData.append('confirm_password', this.registerForm.get('confirm_Password').value);
        this.formData.append('deviceToken', this.registerForm.get('deviceToken').value);

        this._service.register(this.formData).subscribe(response =>  {
          this.data = response;
          localStorage.setItem('email',(this.data.email));
          console.log(this.data)
          console.log( this.data.email)
        if(this.data){
          if(this.data.status == "1"){
            this.router.navigate(['/verifycode'])
          }
        }
        }),
        (err) => console.log(err)

    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
    pagechange(){
      this.router.navigate(['/login'])

    }

}






