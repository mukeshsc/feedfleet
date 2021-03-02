import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { APP_BOOTSTRAP_LISTENER, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api

import {DialogModule} from 'primeng/dialog';
import { WebAppModule } from '../app/web-app/web-app.module';
import { FlwidocModule } from '../app/flwidoc/flwidoc.module';
import { SidedropModule } from '../app/sidedrop/sidedrop.module';
// import { RecaptchaModule } from "ng-recaptcha";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { CropperComponent } from './advance_ui/cropper/cropper.component';
import { OwlCarouselComponent } from './advance_ui/owl-carousel/owl-carousel.component';
import { SweetAlertComponent } from './advance_ui/sweet-alert/sweet-alert.component';
// import { LoginComponent } from './auth/login/login.component';
 import { RegisterComponent } from './sidedrop/register/register.component';
import { ApexComponent } from './charts/apex/apex.component';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { FloatComponent } from './charts/float/float.component';
import { MorrisjsComponent } from './charts/morrisjs/morrisjs.component';
import { PeityComponent } from './charts/peity/peity.component';
import { SparklineComponent } from './charts/sparkline/sparkline.component';
import { ComposeComponent } from './email/compose/compose.component';
import { InboxComponent } from './email/inbox/inbox.component';
import { ReadComponent } from './email/read/read.component';
import { Error1Component } from './errors/error1/error1.component';
import { Error2Component } from './errors/error2/error2.component';
import { AdvancedelementsComponent } from './forms/advancedelements/advancedelements.component';
import { BasicelementsComponent } from './forms/basicelements/basicelements.component';
import { EditorsComponent } from './forms/editors/editors.component';
import { WizardComponent } from './forms/wizard/wizard.component';
// import { BlankpageComponent } from './special_pages/blankpage/blankpage.component';
// import { FaqComponent } from './special_pages/addTicket/addTicket';
import { InvoiceComponent } from './special_pages/invoice/invoice.component';
import { PricingComponent } from './special_pages/pricing/pricing.component';
// import { ProfileComponent } from './special_pages/profile/profile.component';
import { TimelineComponent } from './special_pages/timeline/timeline.component';
import { FeathericonsComponent } from './icons/feathericons/feathericons.component';
import { FlagiconsComponent } from './icons/flagicons/flagicons.component';
import { MdiiconsComponent } from './icons/mdiicons/mdiicons.component';
import { DatatableComponent } from './table/datatable/datatable.component';
import { AlertComponent } from './ui_kit/alert/alert.component';
import { BadgesComponent } from './ui_kit/badges/badges.component';
import { BreadcrumbsComponent } from './ui_kit/breadcrumbs/breadcrumbs.component';
import { ButtongroupComponent } from './ui_kit/buttongroup/buttongroup.component';
import { ButtonsComponent } from './ui_kit/buttons/buttons.component';
import { CardsComponent } from './ui_kit/cards/cards.component';
import { Carousel1Component } from './ui_kit/carousel1/carousel1.component';
import { CollapseComponent } from './ui_kit/collapse/collapse.component';
import { DropdownComponent } from './ui_kit/dropdown/dropdown.component';
import { ListgroupComponent } from './ui_kit/listgroup/listgroup.component';
import { MediagroupComponent } from './ui_kit/mediagroup/mediagroup.component';
import { ModelComponent } from './ui_kit/model/model.component';
import { NavbarComponent } from './ui_kit/navbar/navbar.component';
import { NavsComponent } from './ui_kit/navs/navs.component';
import { PaginationComponent } from './ui_kit/pagination/pagination.component';
import { PopoverComponent } from './ui_kit/popover/popover.component';
import { ProgressComponent } from './ui_kit/progress/progress.component';
import { ScrollbarComponent } from './ui_kit/scrollbar/scrollbar.component';
import { ScrollspyComponent } from './ui_kit/scrollspy/scrollspy.component';
import { SpinnersComponent } from './ui_kit/spinners/spinners.component';
import { TooltipsComponent } from './ui_kit/tooltips/tooltips.component';
import { BasictableComponent } from './table/basictable/basictable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { EditprofileComponent } from './editprofile/editprofile.component';
// import { TransictionhistoryComponent } from './transictionhistory/transictionhistory.component';
// import { SupportComponent } from './support/support.component';
// import { ChangepasswordComponent } from './changepassword/changepassword.component';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatButtonModule } from '@angular/material';
// import { PanelModule } from 'primeng/primeng';
// import { ButtonModule } from 'primeng/primeng';
// import { RadioButtonModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { RecaptchaModule} from 'angular-google-recaptcha';
import { LoginComponent } from './sidedrop/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceService } from 'src/app/service.service';
import { HttpClientModule } from '@angular/common/http';
import { VerifycodeComponent } from './verifycode/verifycode.component';
import { ToastrModule } from 'ngx-toastr';
import { IndexComponent } from './index/index.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarComponent,
    ChatComponent,
    CropperComponent,
    OwlCarouselComponent,
    SweetAlertComponent,
     LoginComponent,
    RegisterComponent,
    ApexComponent,
    ChartjsComponent,
    FloatComponent,
    MorrisjsComponent,
    PeityComponent,
    SparklineComponent,
    ComposeComponent,
    InboxComponent,
    ReadComponent,
    Error1Component,
    Error2Component,
    AdvancedelementsComponent,
    BasicelementsComponent,
    EditorsComponent,
    WizardComponent,
    // BlankpageComponent,
    // FaqComponent,
    InvoiceComponent,
    PricingComponent,
    // ProfileComponent,
    TimelineComponent,
    FeathericonsComponent,
    FlagiconsComponent,
    MdiiconsComponent,
    DatatableComponent,
    AlertComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtongroupComponent,
    ButtonsComponent,
    CardsComponent,
    Carousel1Component,
    CollapseComponent,
    DropdownComponent,
    ListgroupComponent,
    MediagroupComponent,
    ModelComponent,
    NavbarComponent,
    NavsComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressComponent,
    ScrollbarComponent,
    ScrollspyComponent,
    SpinnersComponent,
    TooltipsComponent,
    BasictableComponent,
    VerifycodeComponent,
    IndexComponent,
    ResetpasswordComponent,




    // EditprofileComponent,
    // TransictionhistoryComponent,
    // SupportComponent,
    // ChangepasswordComponent,
  ],
  imports: [
    NgxSpinnerModule,
    HttpClientModule,
    ImageCropperModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    WebAppModule,
    HammerModule,
    FlwidocModule,
    SidedropModule,
    NgbModule,
    AccordionModule,
    DialogModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      // timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,

    }),
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot({
      siteKey: '6LcDvsEZAAAAAEDRZP8VLfa3G5FaTmvzS-Eif2qX',
  }),
    FontAwesomeModule,

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }











