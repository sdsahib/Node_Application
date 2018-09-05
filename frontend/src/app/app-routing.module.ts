import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashLayoutComponent } from "./modules/dash-layout/dash-layout/dash-layout.component";
import { DashboardLayoutComponent } from "./modules/dashboard/dashboard-layout/dashboard-layout.component";
import { SkillnavigationComponent } from "./modules/skills/skillnavigation/skillnavigation.component";
import { CertificationNavigationComponent } from "./modules/certifications/certification-navigation/certification-navigation.component";
import { TrainingsNavigationComponent } from "./modules/trainings/trainings-navigation/trainings-navigation.component";

const ROUTES: Routes = [
    {
        path: '',
        component: DashLayoutComponent,

        children: [
            {
                path: 'dashboard',
                component: DashboardLayoutComponent
            },
            {
                  path: 'skills',
                  component: SkillnavigationComponent
            },
            {
                path: 'certifications',
                component: CertificationNavigationComponent,
            },
            {
                path: 'trainings',
                component: TrainingsNavigationComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }