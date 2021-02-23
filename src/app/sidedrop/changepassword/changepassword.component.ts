import { Component, OnInit } from '@angular/core';
import { MustMatch } from './mustmatch';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { environment } from '../../environments/environment';



@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  https;
  registerForm: FormGroup;
  submitted = false;
  formData = new FormData();
  data : any;
  mail : any;

  constructor(private formBuilder: FormBuilder, public _service:ServiceService) { }


  ngOnInit()
  {
   this.registerForm = this.formBuilder.group({

    old_Password: ['', Validators.required],



     // validates date format yyyy-mm-d
     new_password: ['', [Validators.required, Validators.minLength(6)]],
     conferm_password: ['', Validators.required],

 }, {
     validator: MustMatch('password', 'conferm_password')
 });
 }
 get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }

     this.formData.append("user_id",localStorage.getItem('user_id'));
    this.formData.append("old_Password",this.registerForm.get('old_Password').value);
    this.formData.append("new_password", this.registerForm.get('new_password').value);
    this.formData.append("conferm_password", this.registerForm.get('conferm_password').value);

    this._service.changePassword(this.formData).subscribe(response =>  {
      this.mail = ( localStorage.getItem('user_id') );

      console.log(localStorage.getItem('user_id'))

    }
    )
  }


onReset() {
  this.submitted = false;
  this.registerForm.reset();
}

}

