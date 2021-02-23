import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  value : any;
  faCoffee = faCoffee;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showData: any;
  im :any;
  imgFile : any;
  formData = new FormData();
  im1 :any;
  varify : any;
  showimg1 : any;
  data2 : any;
  data1 : any;
  data3 : any;
  showimg2 : any;
  showimg3 : any;
  im2 :any;
  imageData = environment.imgPath;
  constructor(private formBuilder: FormBuilder,private https: HttpClient, public _service:ServiceService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
      this.getPlayerDraft();
    this.registerForm = this.formBuilder.group({

      full_name: ['', Validators.required],
      company_address: ['', Validators.required],
      dob: ['', Validators.required],
      country: ['', Validators.required],
      gender: ['', Validators.required],
      State: ['', Validators.required],
      zip_code: ['', Validators.required],
      company_email: ['', Validators.required],
      company_website: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company_name: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', Validators.required],

  }, {

  });

  }

  async getPlayerDraft(){
    //  this.im = localStorage.getItem('image'); // logo
    //  console.log(this.im)
    //  this.im1 = localStorage.getItem('image1'); // profile
    //  console.log(this.im1)
    //  this.im2 = localStorage.getItem('image2'); // cover
    //  console.log(this.im2)



    this._service.userDetail().subscribe(res => {
        if(res != null || res != ""){
      this.showData = res.result;
       this.showimg1 = res.result.company_profile;
       this.showimg2 = res.result.company_logo;
       this.showimg3 = res.result.company_cover_photo;
      console.log(this.showimg1)
      console.log(this.showimg2)
      console.log(this.showimg3)

      console.log(this.showData)
      this.registerForm.controls['full_name'].setValue(this.showData.full_name);
      this.registerForm.controls['company_address'].setValue(this.showData.company_address);
      this.registerForm.controls['dob'].setValue(this.showData.dob);
      this.registerForm.controls['country'].setValue(this.showData.country);
      this.registerForm.controls['gender'].setValue(this.showData.gender);
      this.registerForm.controls['State'].setValue(this.showData.State);
      this.registerForm.controls['zip_code'].setValue(this.showData.zip_code);
      this.registerForm.controls['company_email'].setValue(this.showData.company_email);
      this.registerForm.controls['company_website'].setValue(this.showData.company_website);
      this.registerForm.controls['address'].setValue(this.showData.address);
      this.registerForm.controls['email'].setValue(this.showData.email);
      this.registerForm.controls['company_name'].setValue(this.showData.company_name);
      this.registerForm.controls['phoneNumber'].setValue(this.showData.phoneNumber);
    }
    })

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



  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success

}

  fileChangeEvent(event: any): void{
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent){
    this.croppedImage = event.base64;
    let file = this.dataURLtoFile(this.croppedImage,'file.jpg');
    this.imgFile = file
}
imageLoaded(image: HTMLImageElement){
    // show cropper
}
cropperReady(){
    // cropper ready
}
loadImageFailed(){
    // show message
}
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
