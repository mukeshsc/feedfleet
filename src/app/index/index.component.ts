import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from '../service.service';
import { environment } from '../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  show = true;
  formData = new FormData();
  faCoffee = faCoffee;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  mail :any;
  data : any;
  data1 : any = '';
  data2 : any = '';
  data3 : any = '';
  imgFile:any;

  img : any;
  varify : any;
  imageData = environment.imgPath;
  constructor(private formBuilder: FormBuilder,public _service:ServiceService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      full_name: ['', Validators.required],
      company_address: ['', Validators.required],
      dob: ['', Validators.required],
      State: ['', Validators.required],
      country: ['', Validators.required],
      gender: ['', Validators.required],
      zip_code: ['', Validators.required],
      company_email: ['', Validators.required],
      company_website: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company_name: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', Validators.required],
      defaultCountry: ['', Validators.required],
      carrierCode: ['', Validators.required],
      profile_img: ['', Validators.required],

  }, {

  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }
    this.formData.append("user_id",localStorage.getItem('user_id'));
    this.formData.append("full_name",this.registerForm.get('full_name').value);
    this.formData.append("company_address", this.registerForm.get('company_address').value);
    this.formData.append("dob", this.registerForm.get('dob').value);
    this.formData.append("State",this.registerForm.get('State').value);
    this.formData.append("country",this.registerForm.get('country').value);
    this.formData.append("gender",this.registerForm.get('gender').value);
    this.formData.append("zip_code",this.registerForm.get('zip_code').value);
    this.formData.append("company_email",this.registerForm.get('company_email').value);
    this.formData.append("company_website",this.registerForm.get('company_website').value);
    this.formData.append("address",this.registerForm.get('address').value);
    this.formData.append("email",this.registerForm.get('email').value);
    this.formData.append("company_name",this.registerForm.get('company_name').value);
    this.formData.append("phoneNumber",this.registerForm.get('phoneNumber').value);
    this.formData.append("defaultCountry",this.registerForm.get('defaultCountry').value);
    this.formData.append("carrierCode",this.registerForm.get('carrierCode').value);
    this.formData.append("company_id",this.registerForm.get('company_id').value);
    this._service.userUpdate(this.formData).subscribe(response =>  {
    this.data = response;
    this.mail = ( localStorage.getItem('user_id') );
      console.log(this.mail)
    }
    )
}

uploadpic(){
  this.imageChangedEvent= null
  if(this.varify == 1){
    this.formData.append("company_logo",this.imgFile);
    this.formData.append("company_id",localStorage.getItem('company_id'));
    this._service.companyLogo(this.formData).subscribe(response =>  {
      this.spinner.show();
      this.data2 = response.image;
      setTimeout(() => {

        this.spinner.hide();
      }, 5000);
      //  localStorage.setItem('image', this.data2); // image -> logo
      // this.img = localStorage.setItem('this.data2') ;
    })
   }
   if(this.varify == 2){
    this.imageChangedEvent= null
    this.formData.append("profile_img",this.imgFile);
    this.formData.append("user_id",localStorage.getItem('user_id'));
    console.log(localStorage.getItem('user_id'))
    this._service.userProfile(this.formData).subscribe(response =>  {
      this.spinner.show();
      this.data1 =  response.image;
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
      //  localStorage.setItem('image1', this.data1); // image1 -> profile
    })

   }

   if(this.varify == 3){

    this.imageChangedEvent= null
    this.formData.append("company_id",localStorage.getItem('company_id'));
    this.formData.append("cover_img",this.imgFile);
    this._service.companyCover(this.formData).subscribe(response =>  {
      this.spinner.show();
      this.data3 =  response.image;
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
      //  localStorage.setItem('image2', this.data3); // image -> cover
    })
   }

}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    let file = this.dataURLtoFile(this.croppedImage,'file.jpg');
    this.imgFile = file
    console.log( this.imgFile);

}
imageLoaded(image: HTMLImageElement) {

    // show cropper

}
cropperReady() {
    // cropper ready


}
loadImageFailed() {
    // show message
}
// cropper.destroy(){

// };
dataURLtoFile(dataurl, filename){

  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, {type:mime});
}
}

