import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  
 
  res : any;
  list : any [];
  showHide: boolean = false;
  hideShow: boolean = true;
  
  formData = new FormData();
  registerForm: FormGroup;
  selectedUser: any;
  
  constructor(
    private router : Router,public _service:ServiceService,private https: HttpClient,private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  this.ticketDetails();
  }
  
  ticketDetails(){

    this.formData.append("user_id",localStorage.getItem('user_id'));
    this._service.loadticket(this.formData).subscribe(response => {
      this.res = response.result;
      this.list =  this.res;
      console.log(this.res)
      
     
   
      
     

    })
  }
 
  RowSelected(u:any){
    
     this.hideShow = false;
     this.showHide = true;
    this.selectedUser=u;
    
  console.log(this.selectedUser);
  

  
  }
  

    goToPage(){
      this.router.navigateByUrl('module3/addticket');
      

  }
  

  //   search() {
  //   // Declare variables
  //   var input, filter, table, tr, td, i, txtValue;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   table = document.getElementById("myTable");
  //   tr = table.getElementsByTagName("tr");

  //   // Loop through all table rows, and hide those who don't match the search query
  //   for (i = 0; i < tr.length; i++) {
  //     td = tr[i].getElementsByTagName("td")[0];
  //     if (td) {
  //       txtValue = td.textContent || td.innerText;
  //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //         tr[i].style.display = "";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     }
  //   }
  // }
}
