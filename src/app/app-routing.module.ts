import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { PermissionNewComponent } from './dashboard/permission/permission-new/permission-new.component';


//Routing
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'acadmicyear', component: AcadmicyearComponent },
      { path: 'admission', component: AdmissionComponent },
      { path: 'admissiontype', component: AdmissionTypesComponent },
      { path: 'cast', component: CastComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'country', component: CountryComponent },
      { path: 'district', component: DistrictComponent },
      { path: 'division', component: DivisionComponent },
      { path: 'Create Institute', component: InstitudesComponent },
      { path: 'Manage Institute', component: InstitudesComponent },
      { path: 'ocupation', component: OcupationComponent },
      { path: 'permission', component: PermissionComponent },
      { path: 'permission/:id', component: PermissionNewComponent },
      { path: 'relition', component: RelitionComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'roles/:id', component: RolenewComponent },
      { path: 'Create Sanstha', component: SansthaComponent },
      { path: 'Manage Sanstha', component: SansthaComponent },
      { path: 'Create School', component: SchoolComponent },
      { path: 'Manage School', component: SchoolComponent },
      { path: 'schoolcastes', component: SchoolCastesComponent },
      { path: 'schoolcategorys', component: SchoolCategoriesComponent },
      { path: 'schoolreligions', component: SchoolReligionsComponent },
      { path: 'schoolsections', component: SchoolSectionsComponent },
      { path: 'schoolsubcastes', component: SchoolSubcastesComponent },
      { path: 'Create school', component: SchoolsComponent },
      { path: 'section', component: SectionComponent },
      { path: 'states', component: StatesComponent },
      { path: 'subcast', component: SubcastComponent },
      { path: 'taluka', component: TalukaComponent },
      { path: 'Create Admin', component: UsersComponent }
    ]
  },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
