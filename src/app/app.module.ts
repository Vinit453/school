import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolManagementService } from './school-management.service';
import { Http, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UsersComponent } from './dashboard/users/users.component';
import { RolesComponent } from './dashboard/roles/roles.component';
import { PermissionComponent } from './dashboard/permission/permission.component';
import { SansthaComponent } from './dashboard/sanstha/sanstha.component';
import { AcadmicyearComponent } from './dashboard/acadmicyear/acadmicyear.component';
import { CastComponent } from './dashboard/cast/cast.component';
import { SubcastComponent } from './dashboard/subcast/subcast.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { CountryComponent } from './dashboard/country/country.component';
import { StatesComponent } from './dashboard/states/states.component';
import { DistrictComponent } from './dashboard/district/district.component';
import { TalukaComponent } from './dashboard/taluka/taluka.component';
import { SectionComponent } from './dashboard/section/section.component';
import { RelitionComponent } from './dashboard/relition/relition.component';
import { OcupationComponent } from './dashboard/ocupation/ocupation.component';
import { DivisionComponent } from './dashboard/division/division.component';
import { InstitudesComponent } from './dashboard/institudes/institudes.component';
import { SchoolComponent } from './dashboard/school/school.component';
import { SchoolCastesComponent } from './dashboard/school-castes/school-castes.component';
import { SchoolCategoriesComponent } from './dashboard/school-categories/school-categories.component';
import { SchoolReligionsComponent } from './dashboard/school-religions/school-religions.component';
import { SchoolSubcastesComponent } from './dashboard/school-subcastes/school-subcastes.component';
import { SchoolSectionsComponent } from './dashboard/school-sections/school-sections.component';
import { SchoolsComponent } from './dashboard/schools/schools.component';
import { AdmissionComponent } from './dashboard/admission/admission.component';
import { AdmissionTypesComponent } from './dashboard/admission-types/admission-types.component';
import { RolelistComponent } from './dashboard/roles/rolelist/rolelist.component';
import { RolenewComponent } from './dashboard/roles/rolenew/rolenew.component';
import { RoleServiceService } from './dashboard/roles/role-service.service';
import { PermissionListComponent } from './dashboard/permission/permission-list/permission-list.component';
import { PermissionNewComponent } from './dashboard/permission/permission-new/permission-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    RolesComponent,
    PermissionComponent,
    SansthaComponent,
    AcadmicyearComponent,
    CastComponent,
    SubcastComponent,
    CategoryComponent,
    CountryComponent,
    StatesComponent,
    DistrictComponent,
    TalukaComponent,
    SectionComponent,
    RelitionComponent,
    OcupationComponent,
    DivisionComponent,
    InstitudesComponent,
    SchoolComponent,
    SchoolCastesComponent,
    SchoolCategoriesComponent,
    SchoolReligionsComponent,
    SchoolSubcastesComponent,
    SchoolSectionsComponent,
    SchoolsComponent,
    AdmissionComponent,
    AdmissionTypesComponent,
    RolelistComponent,
    RolenewComponent,
    PermissionListComponent,
    PermissionNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    SchoolManagementService,
    RoleServiceService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
