import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
import { TransictionhistoryComponent } from './transictionhistory/transictionhistory.component';
import { AppComponent } from '../app.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { NgxEditorModule } from 'ngx-editor';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ImageCropperModule,
    FontAwesomeModule,
    RouterModule,
    NgxEditorModule
  ],
  declarations: [

    ChangepasswordComponent,
    EditprofileComponent,
    ProfileComponent,
    SupportComponent,
    TransictionhistoryComponent,
    AddTicketComponent,
    ViewTicketComponent
    
  ],
  bootstrap: [AppComponent]

})
export class SidedropModule { }

