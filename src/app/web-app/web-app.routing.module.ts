import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth-service.service';

import { CampaignComponent } from './campaign/campaign.component';
import { CreatecampaignComponent } from './createcampaign/createcampaign.component';
import { InsightsComponent } from './insights/insights.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
{ path: 'createcampaign', component: CreatecampaignComponent,canActivate: [AuthGuardService] },
{ path: 'videos', component: VideosComponent,canActivate: [AuthGuardService] },
{ path: 'insights', component: InsightsComponent,canActivate: [AuthGuardService] },
{ path: 'campaign', component: CampaignComponent,canActivate: [AuthGuardService] },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class WebAppModule { }
