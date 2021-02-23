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
  list1 : any;
  registerForm: FormGroup;
  submitted = false;filearray
  text:any= [null];
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
      user_file : []

  }, {

  });
    this.editor = new Editor();
    console.log(this.editor);
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }

    // display form values on success

}
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  ticketcategory(){


    this._service.loadTicketCategory().subscribe(response => {
      this.list = response;
      this.list1 = response.result.name;
     

    })
  }

  constructor(private formBuilder: FormBuilder,private https: HttpClient, public _service:ServiceService) { }


  addContact(){
    this.text.push(null)
  }

  //remove primary contact
  remContact(i){
    this.text.splice(i,1)

  }
  muliplefile(event){
     console.log(event)
     console.log(event.target.files)
     this.inputfile = event.target.files;
     console.log(event.target)
     console.log(this.inputfile)
      //  this.filearray = event.target.file
  }


}

