import { Component, OnInit,OnDestroy } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent implements OnInit{
  index:any= 0;
  list : any;
  category : any [];
  list1 : any;

  formData = new FormData();
  res:any;
  registerForm: FormGroup;
  submitted = false;filearray
  text:any= [null];
  user_file: any;
  inputfile : any =[''];
  editor: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  
  ngOnInit(): void {
    this.ticketcategory()
    this.registerForm = this.formBuilder.group({
     
      title: ['', Validators.required],
      priority: ['', Validators.required],
      catid: ['', Validators.required],
      ticket_body: ['', Validators.required],
      user_file : [''],
      
      
      

  }, {

  });
    this.editor = new Editor();
    
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;  
    }else{
      this.formData.append("user_id",localStorage.getItem('user_id'));
      this.formData.append('title', this.registerForm.get('title').value);
      this.formData.append('priority', this.registerForm.get('priority').value);
      this.formData.append('catid', this.registerForm.get('catid').value);
      this.formData.append('ticket_body', this.registerForm.get('ticket_body').value);
      this.formData.append('user_file', this.registerForm.get('user_file').value);
      this._service.createticket(this.formData).subscribe(response => {
        this.res = response;
        
       
        console.log(this.res )
     
        
       
  
      })
      console.log(this.registerForm )
      console.log("successfull submited")
      
    }

    // display form values on success
   
    
}
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  ticketcategory(){


    this._service.loadTicketCategory().subscribe(response => {
      this.list = response.result;
      this.category =  this.list;
     
      console.log(this.list )
   
      
     

    })
  }
  


  constructor(private formBuilder: FormBuilder,private https: HttpClient, public _service:ServiceService) { }


  addContact(){
    this.text.push(null)
  }
  onFileChange(event) {
  
    if (event.target.user_file.length > 0) {
      const file = event.target.user_file[0];
      this.registerForm.patchValue({
        user_file : file
      });
    }
  }

  //remove primary contact
  remContact(i){
    this.text.splice(i,1)

  }
  
  

}

