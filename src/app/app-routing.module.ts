import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedelementsComponent } from './forms/advancedelements/advancedelements.component';
import { AlertComponent } from './ui_kit/alert/alert.component';
import { ApexComponent } from './charts/apex/apex.component';
import { BadgesComponent } from './ui_kit/badges/badges.component';
import { BasicelementsComponent } from './forms/basicelements/basicelements.component';
import { BasictableComponent } from './table/basictable/basictable.component';
// import { BlankpageComponent } from './special_pages/blankpage/blankpage.component';
import { BreadcrumbsComponent } from './ui_kit/breadcrumbs/breadcrumbs.component';
import { ButtongroupComponent } from './ui_kit/buttongroup/buttongroup.component';
import { ButtonsComponent } from './ui_kit/buttons/buttons.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CardsComponent } from './ui_kit/cards/cards.component';
import { Carousel1Component } from './ui_kit/carousel1/carousel1.component';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { ChatComponent } from './chat/chat.component';
import { CollapseComponent } from './ui_kit/collapse/collapse.component';
import { ComposeComponent } from './email/compose/compose.component';
import { CropperComponent } from './advance_ui/cropper/cropper.component';
import { DatatableComponent } from './table/datatable/datatable.component';
import { DropdownComponent } from './ui_kit/dropdown/dropdown.component';
import { EditorsComponent } from './forms/editors/editors.component';
import { Error1Component } from './errors/error1/error1.component';
import { Error2Component } from './errors/error2/error2.component';
// import { FaqComponent } from './special_pages/addTicket/addTicket';
import { FeathericonsComponent } from './icons/feathericons/feathericons.component';
import { FlagiconsComponent } from './icons/flagicons/flagicons.component';
import { FloatComponent } from './charts/float/float.component';
import { InboxComponent } from './email/inbox/inbox.component';
import { InvoiceComponent } from './special_pages/invoice/invoice.component';
import { ListgroupComponent } from './ui_kit/listgroup/listgroup.component';
 import { LoginComponent } from './sidedrop/login/login.component';
import { MdiiconsComponent } from './icons/mdiicons/mdiicons.component';
import { MediagroupComponent } from './ui_kit/mediagroup/mediagroup.component';
import { ModelComponent } from './ui_kit/model/model.component';
import { MorrisjsComponent } from './charts/morrisjs/morrisjs.component';
import { NavbarComponent } from './ui_kit/navbar/navbar.component';
import { NavsComponent } from './ui_kit/navs/navs.component';
import { OwlCarouselComponent } from './advance_ui/owl-carousel/owl-carousel.component';
import { PaginationComponent } from './ui_kit/pagination/pagination.component';
import { PeityComponent } from './charts/peity/peity.component';
import { PopoverComponent } from './ui_kit/popover/popover.component';
import { PricingComponent } from './special_pages/pricing/pricing.component';
 import { ProfileComponent } from './sidedrop/profile/profile.component';
import { ProgressComponent } from './ui_kit/progress/progress.component';
import { ReadComponent } from './email/read/read.component';
 import { RegisterComponent } from './sidedrop/register/register.component';
import { ScrollbarComponent } from './ui_kit/scrollbar/scrollbar.component';
import { ScrollspyComponent } from './ui_kit/scrollspy/scrollspy.component';
import { SparklineComponent } from './charts/sparkline/sparkline.component';
import { SpinnersComponent } from './ui_kit/spinners/spinners.component';
import { SweetAlertComponent } from './advance_ui/sweet-alert/sweet-alert.component';
import { TimelineComponent } from './special_pages/timeline/timeline.component';
import { TooltipsComponent } from './ui_kit/tooltips/tooltips.component';
import { WizardComponent } from './forms/wizard/wizard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ChangepasswordComponent } from './sidedrop/changepassword/changepassword.component';
// import { SupportComponent } from './sidedrop/support/support.component';
// import { TransictionhistoryComponent } from './sidedrop/transictionhistory/transictionhistory.component';
// import { EditprofileComponent } from './sidedrop/editprofile/editprofile.component';
import { EditprofileComponent } from './sidedrop/editprofile/editprofile.component';
 import { TransictionhistoryComponent } from './sidedrop/transictionhistory/transictionhistory.component';
 import { SupportComponent } from './sidedrop/support/support.component';
 import { ChangepasswordComponent } from './sidedrop/changepassword/changepassword.component';
 import { AppComponent } from './app.component';
 import { VerifycodeComponent } from './verifycode/verifycode.component';
 import { IndexComponent } from './index/index.component';
 import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AuthGuardService } from './auth-service.service';


const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]  },

  {path:'module1',loadChildren: () => import('../app/web-app/web-app.routing.module').then(m => m.WebAppModule)},
  {path:'module2',loadChildren: () => import('../app/flwidoc/fliwidoc.routing.module').then(m => m.FlwidocModule)},
  {path:'module3',loadChildren: () => import('../app/sidedrop/sidedrop.routing.module').then(m => m.SidedropModule)},

{path: 'calendar', component: CalendarComponent, canActivate: [AuthGuardService] },
// {path: 'resetpassword/:id', component: ResetpasswordComponent },
{path: 'resetpassword', component: ResetpasswordComponent },
{path: 'verifycode', component: VerifycodeComponent },
{path: 'index', component: IndexComponent },
{path: 'chat', component: ChatComponent },
{path: 'cropper', component: CropperComponent },
{path: 'owlCarousel', component: OwlCarouselComponent },
{path: 'sweetalert', component: SweetAlertComponent },
 {path: 'login', component: LoginComponent },
{path: 'register', component: RegisterComponent },
{path: 'apex', component: ApexComponent },
{path: 'chartjs', component: ChartjsComponent },
{path: 'float', component: FloatComponent },
{path: 'morrisjs', component: MorrisjsComponent },
{path: 'peity', component: PeityComponent },
{path: 'sparkline', component: SparklineComponent },
{path: 'compose', component: ComposeComponent },
{path: 'inbox', component: InboxComponent },
{path: 'read', component: ReadComponent },
{path: 'error1', component: Error1Component },
{path: 'error2', component: Error2Component },
{path: 'advancedelements', component: AdvancedelementsComponent },
{path: 'basicelements', component: BasicelementsComponent },
{path: 'editors', component: EditorsComponent },
{path: 'wizard', component: WizardComponent },
// {path: 'blankpage', component: BlankpageComponent },
// {path: 'faq', component: FaqComponent },
{path: 'invoice', component: InvoiceComponent },
{path: 'pricing', component: PricingComponent },
{path: 'profile', component: ProfileComponent },
{path: 'timeline', component: TimelineComponent },
{path: 'feathericons', component: FeathericonsComponent },
{path: 'flagicons', component: FlagiconsComponent },
{path: 'mdi', component: MdiiconsComponent },
{path: 'datatable', component: DatatableComponent },
{path: 'alert', component: AlertComponent },
{path: 'badges', component: BadgesComponent },
{path: 'breadcrumbs', component: BreadcrumbsComponent },
{path: 'buttongroup', component: ButtongroupComponent },
{path: 'buttons', component: ButtonsComponent },
{path: 'cards', component: CardsComponent },
{path: 'carousel1', component: Carousel1Component },
{path: 'collapse', component: CollapseComponent },
{path: 'dropdown', component: DropdownComponent },
{path: 'listgroup', component: ListgroupComponent },
{path: 'mediagroup', component: MediagroupComponent },
{path: 'model', component: ModelComponent },
{path: 'navbar', component: NavbarComponent },
{path: 'navs', component: NavsComponent },
{path: 'pagination', component: PaginationComponent },
{path: 'Popover', component: PopoverComponent },
{path: 'Progress', component: ProgressComponent },
{path: 'scrollbar', component: ScrollbarComponent },
{path: 'scrollspy', component: ScrollspyComponent },
{path: 'spinners', component: SpinnersComponent },
{path: 'tooltips', component: TooltipsComponent },

{path: 'basictable', component: BasictableComponent },

 {path: 'editprofile', component: EditprofileComponent },
 {path: 'transictionhistory', component: TransictionhistoryComponent },
 {path: 'support', component: SupportComponent },
 {path: 'changepassword', component: ChangepasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






