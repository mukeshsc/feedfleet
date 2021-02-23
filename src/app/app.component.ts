import { Component } from '@angular/core'
import { Router } from '@angular/router';
import {OnInit,ElementRef, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showid = true;

  constructor(public router: Router){
    console.log(this.router.url)
  }
  getRoute(url){
    // let rute = url.split('/ http://localhost:4200/module3/changepassword')
    // return rute[1];
  }

  ngOnInit(): void {


}

getStatus(){
  if(this.router.url == '/module3/changepassword'){

    return false;

   }
   if(this.router.url == '/register'){

    return false;

   }
   if(this.router.url == '/login'){

    return false;

   }
   if(this.router.url == '/cropper'){

    return false;

   }
   if(this.router.url == '/verifycode'){

    return false;

   }
   if(this.router.url == '/alert'){

    return false;

   }
   if(this.router.url == '/resetpassword'){

    return false;

   }
   else{

    return true;
   }
}

local(){
  localStorage.clear();
}

}
