import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFleetVideosComponent } from './create-fleet-videos/create-fleet-videos.component';
import { VideoComponent } from './video/video.component';
import { FleetWidgetsComponent } from './fleet-widgets/fleet-widgets.component';
import { ReviewWidgetsComponent } from './review-widgets/review-widgets.component';
import {DialogModule} from 'primeng/dialog';
import { BrowserModule } from '@angular/platform-browser';

// import { AccordionModule } from 'primeng/components/accordion/accordion';
// import { PanelModule } from 'primeng/components/panel/panel';
// import { ButtonModule } from 'primeng/components/button/button';
// import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
// import {DialogService} from 'primeng/dynamicdialog';
// import {CarsListDemo} from './carslistdemo';
import {RouterModule} from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AudioRecordingService } from '../../app/audio-recording.service';
import { VideoRecordingService } from '../../app/video-recording.service';
@NgModule({
  declarations: [
    CreateFleetVideosComponent,
    VideoComponent,
    FleetWidgetsComponent,
    ReviewWidgetsComponent,

  ],
  imports: [
    CommonModule,
    DialogModule,
    // AccordionModule,
    // PanelModule,
    // ButtonModule,
    // RadioButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    // AppComponent,
    BrowserModule,
    RouterModule,
    // DialogService,
    // CarsListDemo,
    ImageCropperModule,
    // videojs,



  ],
  providers: [AudioRecordingService, VideoRecordingService],


})

export class FlwidocModule { }




 