import { Component, OnInit } from '@angular/core';
import { MustMatch } from './mustmatch';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  formData = new FormData();
  data : any;


  // myRecaptcha: boolean
  constructor(private formBuilder: FormBuilder, public _service:ServiceService, public router:Router, private spinner: NgxSpinnerService) { }

    ngOnInit()
     {
      this.registerForm = this.formBuilder.group({

        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm_password: ['', Validators.required],


    }, {
        validator: MustMatch('password', 'confirm_password')
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
        this.formData.append("user_id",localStorage.getItem('user_id'));
        this.formData.append('password', this.registerForm.get('password').value);
        this.formData.append('confirm_password', this.registerForm.get('confirm_password').value);

      this._service.resetPassword(this.formData).subscribe(res => {
      this.data = res;

  })
}
      onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

}


