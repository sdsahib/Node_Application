import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashLayoutComponent } from './modules/dash-layout/dash-layout/dash-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { GlobalSearchListComponent } from './modules/dash-layout/global-search-list/global-search-list.component';
import { DashLayoutService } from './services/dashlayout.service';
import { CookieService } from 'ngx-cookie-service';
import { UserCookie } from './services/usercookie.service';
import { DashboardLayoutComponent } from './modules/dashboard/dashboard-layout/dashboard-layout.component';
import { SkillnavigationComponent } from './modules/skills/skillnavigation/skillnavigation.component';
import { CertificationNavigationComponent } from './modules/certifications/certification-navigation/certification-navigation.component';
import { TrainingsNavigationComponent } from './modules/trainings/trainings-navigation/trainings-navigation.component';
import { CertificationPlaceholderComponent } from './modules/dashboard/certification-placeholder/certification-placeholder.component';
import { NotificationMarqueeComponent } from './modules/dashboard/notification-marquee/notification-marquee.component';
import { PlaceholderbadgeComponent } from './modules/dashboard/placeholderbadge/placeholderbadge.component';
import { SkillsPlaceholderComponent } from './modules/dashboard/skills-placeholder/skills-placeholder.component';
import { TrainingPlaceholderComponent } from './modules/dashboard/training-placeholder/training-placeholder.component';
import { AddNewCertificateService } from './services/addnewcertificate.service';
import { AddNewTrainingService } from './services/addnewtraining.service';
import { AdminServices } from './services/adminService';
import { AllCertificationService } from './services/allcertification.service';
import { AllSkillService } from './services/allskillservice.service';
import { AllSubSkillService } from './services/allsubskillservice.service';
import { AvailableTrainingService } from './services/availabletraining.service';
import { DashboardCertificationPlaceholderService } from './services/dashboardcertificationplaceholder.service';
import { DashBoardSkillPlaceHolderService } from './services/dashboardskillplaceholder.service';
import { DashboardTrainingPlaceholder } from './services/dashboardtrainingplaceholder.service';
import { EmployeeAuthorizationService } from './services/employee-authorization.service';
import { EncrptionService } from './services/encryption.service';
import { EventService } from './services/event.service';
import { ErrorHandler } from './services/handleerror.service';
import { MyCertificationService } from './services/mycertification.service';
import { MySkillService } from './services/myskillservice.service';
import { MySubSkillService } from './services/mysubskillservice.service';
import { NewCertificationService } from './services/newcertification.service';
import { ReportService } from './services/report.service';
import { SearchService } from './services/search.service';
import { SkillGroupService } from './services/SkillGroupService.service';
import { ToastService } from './services/toast.service';
import { trainingService } from './services/training.service';

@NgModule({
  declarations: [
    AppComponent,
    DashLayoutComponent,
    GlobalSearchListComponent,
    DashboardLayoutComponent,
    SkillnavigationComponent,
    CertificationNavigationComponent,
    TrainingsNavigationComponent,
    CertificationPlaceholderComponent,
    NotificationMarqueeComponent,
    PlaceholderbadgeComponent,
    SkillsPlaceholderComponent,
    TrainingPlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],
  providers: [
    DashLayoutService,
    CookieService,
    UserCookie,
    AddNewCertificateService,
    AddNewTrainingService,
    AdminServices,
    AllCertificationService,
    AllSkillService,
    AllSubSkillService,
    AvailableTrainingService,
    DashboardCertificationPlaceholderService,
    DashBoardSkillPlaceHolderService,
    DashboardTrainingPlaceholder,
    EmployeeAuthorizationService,
    EncrptionService,
    EventService,
    ErrorHandler,
    MyCertificationService,
    MySkillService,
    MySubSkillService,
    NewCertificationService,
    ReportService,
    SearchService,
    SkillGroupService,
    ToastService,
    trainingService,
    UserCookie
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
