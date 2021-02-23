import { Component, OnInit,ViewChild } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { FormControl,} from "@angular/forms";
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MethodCall } from '@angular/compiler';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})

export class CampaignComponent implements  OnInit, NgMultiSelectDropDownModule{
  isDropdown=false;
  create: any;
  formData = new FormData();
  @ViewChild('multiSelect') multiSelect;
  public form: FormGroup;
  public loadContent: boolean = false;
  public name = 'Cricketers';
  public data = [];
  public settings = {};
  public selectedItems = [];
  public idField;
  campaignForm: FormGroup;
   submitted = false;
  text:any= [null]
  index:any= 0;
  // showid = false;
   imageChangedEvent: any = '';
   croppedImage: any = '';
  //multislect

  // ..............
  showData : any;
  showimg1: any;
  showimg2: any;
  showimg3: any;
  camp : any;
  imagecover :any;
  data1 : any = '';
  data2 : any = '';
  data3 : any = '';
  imgFile : any;
  dropdata : any;
  registerForm: FormGroup;//validation
  varify:any= 0;
  success:any= 0;
  reqimg1 : any;
  reqimg2 : any;
  //promptvalue : any = [];//prompt variable
  selectitemafter :any;//extra field varaible
  reqimg3: any;
  //image cropper
  logo : any;
  photo :any;
  stfy: any;
  addArray: any;
  itemname : any;
  counter : number;
  selectitemarray : any = [];//extra field varaible]
  valu1eId : any;
  campId: any;
  showcontentdrop : any;
  loadContentnot = true;
  showHide: boolean = false;
  hideShow: boolean = true;

  constructor(private formBuilder: FormBuilder,public _service:ServiceService, public router:Router, private spinner: NgxSpinnerService) { }


  ngOnInit(): void {

    this.showmeCampaign()
    this.campaignForm = this.formBuilder.group({
      title: ['', Validators.required],
      your_name: ['', Validators.required],
      description: ['', Validators.required],
      designation: ['', Validators.required],
      prompt: ['', Validators.required],
      bannerimg : [],

      // prompt_value:this.formBuilder.array([
      //   this.formBuilder.control('')
      // ]),
      is_rating: [''],
      url: ['', Validators.required],
      extra_field: ['', Validators.required],
      thankyou_message: ['', Validators.required],
      callback_link: ['', [Validators.required, Validators.email]]

  })


  this.data = [
  {item_id: "1", item_text: "Name"},
  {item_id: "2", item_text: "Email"},
  {item_id: "3", item_text: "DOB"},
  {item_id: "4", item_text: "Phone Number"},
  {item_id: "5", item_text: "City"},
  {item_id: "6", item_text: "Country"}

  ];


  this.settings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: true,
    selectAllText: '   ',
    unSelectAllText: '   ',
    allowSearchFilter: true,
    limitSelection: -1,
    clearSearchFilter: true,
    maxHeight: 197,
    itemsShowLimit: 3,
    searchPlaceholderText: '   ',
    // noDataAvailablePlaceholderText: 'Không có dữ liệu',
    closeDropDownOnSelection: false,
    showSelectedItemsAtTop: true,
    defaultOpen: false
  };

  this.setForm();
   }
   public setForm() {
    this.form = new FormGroup({
      name: new FormControl(this.data, Validators.required)
    });
    this.loadContent = false;
    this.isDropdown = true;
  }

 get p() { return this.form.controls; }

  public save() {
    console.log(this.form.value);
  }

  public resetForm() {
    // beacuse i need select all crickter by default when i click on reset button.
    this.setForm();
    this.multiSelect.toggleSelectAll();
    // i try below variable isAllItemsSelected reference from your  repository but still not working
     this.multiSelect.isAllItemsSelected = true;
  }

  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    // console.log(item);
  }

  public onItemSelect(item: any){

    console.log(item);
    this.selectitemafter = item;
    console.log(item.item_text)
    this.selectitemarray.push((item.item_text));
    //this.itemname = item.item_textselectitemarray
    console.log(this.selectitemarray);

  }
  public onDeSelect(item: any) {
    console.log(item);
  }

  public onSelectAll(items: any) {
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }
  async showmeCampaign(){
    //  this.im = localStorage.getItem('image'); // logo
    //  console.log(this.im)
    //  this.im1 = localStorage.getItem('image1'); // profile
    //  console.log(this.im1)
    //  this.im2 = localStorage.getItem('image2'); // cover
    //  console.log(this.im2)

    this.formData.append("user_id",localStorage.getItem('user_id'));
    this._service.showCampaign(this.formData).subscribe(res => {
   {

      this.showData = res.result;
      console.log( this.showData )
      this.imagecover = this.showData.banner;
      console.log(this.imagecover)
      this.photo =  res.result.photo;
      this.logo = res.result.company_logo;

    //   this.campId == this.showData.campaign_id;
    //   console.log(this.showData.campaign_id)
    //  console.log(this.showData)
     //const result = this.showData.filter(word => word.campaign_id == "this.campId");
      // this.campaignForm.controls['thankyou_message'].setValue(this.showData.pageDat.page_html);
      // this.campaignForm.controls['callback_link'].setValue(this.showData.callback_link);
    }
    })
  }

  showEdit(item){
    this.showHide = true;
  this.hideShow = false;
   console.log(item)
  this.campaignForm.controls['title'].setValue(item.title);
   this.campaignForm.controls['your_name'].setValue(item.your_name);
   this.campaignForm.controls['description'].setValue(item.description);
   this.campaignForm.controls['designation'].setValue(item.description);
   this.campaignForm.controls['is_rating'].setValue(item.is_rating);
   this.campaignForm.controls['extra_field'].setValue(item.extra_field);
   this.campaignForm.controls['thankyou_message'].setValue(item.pageData[0].page_html);
   this.campaignForm.controls['callback_link'].setValue(item.pageData[1].page_html);
   this.campaignForm.controls['url'].setValue(item.shareLink);
   this.campaignForm.controls['prompt'].setValue(item.prompt_value[1].label_value);
   this.campaignForm.controls['bannerimg'].setValue(this.imagecover);

  }


  //get f() { return this.registerForm.controls; }
  next(){
    this.index ++;
  }
  previw(){
    this.index--;
  }


  // get prompt_value(){
  //   return this.registerForm.get('prompt_value') as FormArray;

  // }
  // addtext(e){
  //   e.preventDefault();
  //   this.prompt_value.push(this.formBuilder.control(''));
  // }
  get f() { return this.campaignForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.campaignForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    }

//photoupload api
uploadpic(){

  if(this.varify == 1){
    this.formData.append("image_path",this.imgFile);
    this.formData.append("type","1");
    this.formData.append("user_id",localStorage.getItem('user_id'));
    this._service.PhotoUpload(this.formData).subscribe(response =>  {
      this.spinner.show();
      this.data2 = response.image;
       this.reqimg1 = response.request_image;
       console.log(this.reqimg1);
       console.log(this.data2);
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);

    })
   }
   if(this.varify == 2){
    // this.imageChangedEvent= null
    this.formData.append("image_path",this.imgFile);
    this.formData.append("type","2");
    this.formData.append("user_id",localStorage.getItem('user_id'));
    this._service.PhotoUpload(this.formData).subscribe(response =>  {
      this.spinner.show();
      this.data1 =  response.image;
      this.reqimg2= response.request_image;
      console.log(this.reqimg2);
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
    })
   }

   if(this.varify == 3){
    // this.imageChangedEvent= null
    this.formData.append("image_path",this.imgFile);
    this.formData.append("type","3");
    this.formData.append("user_id",localStorage.getItem('user_id'));
    this._service.PhotoUpload(this.formData).subscribe(response =>  {
      this.spinner.show();
      this.data3 =  response.image;
      console.log(this.data3);
      this.reqimg3 = response.request_image;
      console.log(this.reqimg3);
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
    })
   }
}

copyInputMessage(inputElement){
  inputElement.select();
  document.execCommand('copy');
  inputElement.setSelectionRange(0, 100);
}
showcontent(){
  this.loadContent = true;
  this.loadContentnot = false;
}

onReset(){
     this.submitted = false;
    this.campaignForm.reset();
}
  // toggleId(){
  //   this.showid = true;
  // }

  // add contact
  addContact(){
    this.text.push(null)
  }

  //remove primary contact
  remContact(i){
    this.text.splice(i,1)
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
  dataURLtoFile(dataurl, filename){
    //conversion image to file format

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


  // showCamp(){
  //   this.formData.append("user_id",localStorage.getItem('user_id'));
  //   this._service.showCampaign(this.formData).subscribe(res => {
  //     // this.spinner.show();
  //     this.create = res.result
  //     console.log(res)

  //     this.campaignForm.controls['your_name'].setValue(this.create.your_name);
  //     this.campaignForm.controls['Designation'].setValue(this.create.dob);
  //     this.campaignForm.controls['Message'].setValue(this.create.country);
  //     this.campaignForm.controls['gender'].setValue(this.create.gender);
  //     this.campaignForm.controls['State'].setValue(this.create.State);

  //   })
  // }

}

