import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.scss']
})
export class ViewTicketComponent implements OnInit {
  res : any;
  list : any [];
  private id: string;
  
 
  formData = new FormData();
  constructor( public _service:ServiceService,private https: HttpClient,formBuilder: FormBuilder,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ticketDetails()
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{  
      if(paramMap.has('id')){   
        this.id = paramMap.get('id');  
        console.log(this.id);
      } 
    });  
    

    
  }

 
  ticketDetails(){

    this.formData.append("user_id",localStorage.getItem('user_id'));
    this._service.loadticket(this.formData).subscribe(response => {
      this.res = response.result;
      this.list =  this.res;
      console.log(this.res)
      
     
   
      
     

    })
  }
  
}
