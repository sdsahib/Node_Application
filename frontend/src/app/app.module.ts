import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashLayoutComponent } from './modules/dash-layout/dash-layout/dash-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { GlobalSearchListComponent } from './modules/dash-layout/global-search-list/global-search-list.component';
import { DashLayoutService } from './modules/services/dashlayout.service';
import { CookieService } from 'ngx-cookie-service';
import { UserCookie } from './modules/services/usercookie.service';
import { DashboardLayoutComponent } from './modules/dashboard/dashboard-layout/dashboard-layout.component';
import { SkillnavigationComponent } from './modules/skills/skillnavigation/skillnavigation.component';
import { CertificationNavigationComponent } from './modules/certifications/certification-navigation/certification-navigation.component';
import { TrainingsNavigationComponent } from './modules/trainings/trainings-navigation/trainings-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashLayoutComponent,
    GlobalSearchListComponent,
    DashboardLayoutComponent,
    SkillnavigationComponent,
    CertificationNavigationComponent,
    TrainingsNavigationComponent
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
    UserCookie
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
