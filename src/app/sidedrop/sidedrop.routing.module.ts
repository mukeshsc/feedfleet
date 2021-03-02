import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RecaptchaV3Module } from 'ng-recaptcha';


import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
import { TransictionhistoryComponent } from './transictionhistory/transictionhistory.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { AuthGuardService } from '../auth-service.service';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
const routes: Routes = [
{ path: 'profile', component: ProfileComponent,canActivate: [AuthGuardService] },
{ path: 'editprofile', component: EditprofileComponent,canActivate: [AuthGuardService] },
{ path: 'changepassword', component: ChangepasswordComponent,canActivate: [AuthGuardService] },
{ path: 'transictionhistory', component: TransictionhistoryComponent,canActivate: [AuthGuardService] },
{ path: 'support', component: SupportComponent,canActivate: [AuthGuardService] },
{path: 'addticket', component: AddTicketComponent,canActivate: [AuthGuardService] },
{path: 'viewticket', component: ViewTicketComponent,canActivate: [AuthGuardService] },
];

@NgModule({
imports: [RouterModule.forChild(routes), RecaptchaV3Module,FormsModule,CommonModule,
  ReactiveFormsModule],
  declarations: [],

exports: [RouterModule]
})
export class SidedropModule {}
