import { NgModule } from '@angular/core';

// import {ReactiveFormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CampaignComponent } from './campaign/campaign.component';
import { InsightsComponent } from './insights/insights.component';
import { CreatecampaignComponent } from './createcampaign/createcampaign.component';
import { VideosComponent } from './videos/videos.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppComponent } from '../app.component';
import { ChartsModule } from 'ng2-charts';


import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng';


@NgModule({
  declarations: [
    CreatecampaignComponent,
    VideosComponent,
    InsightsComponent,
    CampaignComponent


  ],
  imports: [
    NgMultiSelectDropDownModule,
    CalendarModule,

    CommonModule,
    ImageCropperModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    HammerModule,
    ReactiveFormsModule,
    ChartsModule,






  ],
  providers: [ ],
  bootstrap: [AppComponent],

})
export class WebAppModule { }





54651654
