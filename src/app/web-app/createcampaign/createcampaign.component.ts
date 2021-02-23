import { Component, OnInit,ViewChild  } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormArray, FormBuilder, FormGroup,MaxLengthValidator,Validator, Validators } from '@angular/forms';
import { FormControl,} from "@angular/forms";
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MethodCall } from '@angular/compiler';



@Component({
  selector: 'app-createcampaign',
  templateUrl: './createcampaign.component.html',
  styleUrls: ['./createcampaign.component.scss']
})
export class CreatecampaignComponent implements  OnInit,NgMultiSelectDropDownModule{
   
 
  
   
  
  
 
 
  //multislect
  isDropdown=false;
  @ViewChild('multiSelect') multiSelect;
  public form: FormGroup;
  public loadContent: boolean = true;
  public name = 'Cricketers';
  public data = [];
  public settings = {};
  // ..............
  showData : any;
  camp : any;
  data1 : any = '';
  data2 : any = '';
  data3 : any = '';
  imgFile : any;
  dropdata : any;
  public selectedItems = [];
  public idField;
  text:any= [null];
  registerForm: FormGroup;//validation
  submitted = false;
  formData = new FormData();
  index:any= 0;
  varify:any= 0;
  success:any= 0;
  reqimg1 : any;
  reqimg2 : any;
  promptvalue : any = [];//prompt variable
  selectitemafter :any;//extra field varaible
  reqimg3: any;
  //image cropper
  imageChangedEvent: any = '';
  croppedImage: any = '';
  stfy: any;
  addArray: any;
  itemname : any;
  counter : number;
  selectitemarray : any = [];//extra field varaible

  constructor(private formBuilder: FormBuilder,public _service:ServiceService, public router:Router, private spinner: NgxSpinnerService) {

   }
   
   
  
   ngOnInit() {

    this.extrafeild();//get api multiselect
    this.registerForm = this.formBuilder.group({

      title: ['', Validators.required],
      your_name: ['', Validators.required],
      description: ['', Validators.required],
      designation: ['', Validators.required],
      prompt_value:this.formBuilder.array([
        this.formBuilder.control('')

      ]),
      
      is_rating: [''],
      extra_fields: ['', Validators.required],
      thankyou_message: ['', Validators.required],
      callback_link: ['', [Validators.required, Validators.email]],

  })


//this.multiSelectdropdown start
  this.data = [
  ]

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
    this.loadContent = true;
    this.isDropdown = true;
  }

  get p() { return this.form.controls; } //function of multiselct

  public save(){
    console.log(this.form.value);
  }
   
  mufn(event){
    console.log(event.target.checked);
    
  }
  public resetForm(){
    // beacuse i need select all crickter by default when i click on reset button.
    this.setForm();
    this.multiSelect.toggleSelectAll();
    // i try below variable isAllItemsSelected reference from your  repository but still not working
     this.multiSelect.isAllItemsSelected = true;
  }

  public onFilterChange(item: any){
    console.log(item);
    
  }
  public onDropDownClose(item: any){
    console.log(item);
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
  
 
//multiselectdropdown end

   get f() { return this.registerForm.controls; }


   get prompt_value(){
    return this.registerForm.get('prompt_value') as FormArray;

  }
  addtext(e){
    e.preventDefault();
    this.prompt_value.push(this.formBuilder.control(''));
  }

  

onSubmit() {
  this.submitted = true;
  this.counter=0;
  for(let prop of this.prompt_value.controls)
  {
    this.promptvalue.push(prop.value)
  }
  console.log(this.promptvalue)
      this.formData.append('title', this.registerForm.get('title').value);
      this.formData.append('your_name', this.registerForm.get('your_name').value);
      this.formData.append('designation', this.registerForm.get('designation').value);
      this.formData.append('description', this.registerForm.get('description').value);
      this.formData.append("user_id",localStorage.getItem('user_id'));
      this.formData.append('is_rating', this.registerForm.get('is_rating').value);
      //this.formData.append('extra_fields', this.registerForm.get('extra_fields').value);
      this.formData.append('thankyou_message', this.registerForm.get('thankyou_message').value);
      this.formData.append('callback_link', this.registerForm.get('callback_link').value);
      this.formData.append("campaign_logo",this.reqimg3);
      this.formData.append('campaign_profile', this.reqimg1);
      this.formData.append('campaign_cover', this.reqimg2);
      this.formData.append('extra_fields', this.selectitemarray);
      this.formData.append('prompt_value',JSON.stringify(this.promptvalue));

      this._service.createCampaign(this.formData).subscribe(res => {
        // this.spinner.show();
        this.camp = res.result;

        // setTimeout(() => {
        //   this.spinner.hide();
        // }, 5000);

        // if(res.status == "1"){
        //   this.success= true;
        //   setTimeout(() => {
        //     this.success= false;
        //   }, 5000);
        //   this.router.navigate(['/campaign'])
        // }

      })
    }
    
    
//photoupload api
uploadpic(){
  this.imageChangedEvent= null
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

  next(){
    this.index ++;

  }
  previw(){
    this.index--;
  }
  onReset() {
    this.submitted = false;
   this.registerForm.reset();
  }

  async extrafeild(){
    this.dropdata = [];
    this._service.extraFields().subscribe(res => {
      console.log(res)
    this.showData = res;
    for(let item of this.showData.result){
      this.dropdata.push({ item_id: item.field_id, item_text: item.field_name })
    }
    //console.log(this.showData)
    console.log(this.dropdata)

    })
  }

  addContact(){
    this.text.push(null)
  }

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

}





