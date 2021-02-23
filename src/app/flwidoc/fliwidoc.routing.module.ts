import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth-service.service';
import { CreateFleetVideosComponent } from './create-fleet-videos/create-fleet-videos.component';
import { FleetWidgetsComponent } from './fleet-widgets/fleet-widgets.component';
import { ReviewWidgetsComponent } from './review-widgets/review-widgets.component';
import { VideoComponent } from './video/video.component';


const routes: Routes = [
{ path: 'createfleetvideos', component: CreateFleetVideosComponent,canActivate: [AuthGuardService] },
{ path: 'video', component: VideoComponent,canActivate: [AuthGuardService] },
{ path: 'fleetwidgets', component: FleetWidgetsComponent,canActivate: [AuthGuardService] },
{ path: 'reviewwidgets', component: ReviewWidgetsComponent,canActivate: [AuthGuardService] },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class FlwidocModule { }

