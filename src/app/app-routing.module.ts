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
import { AcadmicYearListComponent } from './dashboard/acadmicyear/acadmic-year-list/acadmic-year-list.component';
import { AcadmicYearFormComponent } from './dashboard/acadmicyear/acadmic-year-form/acadmic-year-form.component';
import { AdmissionListComponent } from './dashboard/admission/admission-list/admission-list.component';
import { AdmissionFormComponent } from './dashboard/admission/admission-form/admission-form.component';
import { AdmissionTypeListComponent } from './dashboard/admission-types/admission-type-list/admission-type-list.component';
import { AdmissionTypeFormComponent } from './dashboard/admission-types/admission-type-form/admission-type-form.component';
import { CastListComponent } from './dashboard/cast/cast-list/cast-list.component';
import { CastFormComponent } from './dashboard/cast/cast-form/cast-form.component';
import { CategoryListComponent } from './dashboard/category/category-list/category-list.component';
import { CategoryFormComponent } from './dashboard/category/category-form/category-form.component';
import { CountryListComponent } from './dashboard/country/country-list/country-list.component';
import { CountryFormComponent } from './dashboard/country/country-form/country-form.component';
import { DistrictListComponent } from './dashboard/district/district-list/district-list.component';
import { DistrictFormComponent } from './dashboard/district/district-form/district-form.component';
import { DivisionListComponent } from './dashboard/division/division-list/division-list.component';
import { DivisionFormComponent } from './dashboard/division/division-form/division-form.component';
import { InstituteListComponent } from './dashboard/institudes/institute-list/institute-list.component';
import { InstituteFormComponent } from './dashboard/institudes/institute-form/institute-form.component';
import { OcupationListComponent } from './dashboard/ocupation/ocupation-list/ocupation-list.component';
import { OcupationFormComponent } from './dashboard/ocupation/ocupation-form/ocupation-form.component';
import { RelitionListComponent } from './dashboard/relition/relition-list/relition-list.component';
import { RelitionFormComponent } from './dashboard/relition/relition-form/relition-form.component';
import { SansthaListComponent } from './dashboard/sanstha/sanstha-list/sanstha-list.component';
import { SansthaFormComponent } from './dashboard/sanstha/sanstha-form/sanstha-form.component';
import { SchoolListComponent } from './dashboard/school/school-list/school-list.component';
import { SchoolFormComponent } from './dashboard/school/school-form/school-form.component';
import { SchoolcastListComponent } from './dashboard/school-castes/schoolcast-list/schoolcast-list.component';
import { SchoolcastFormComponent } from './dashboard/school-castes/schoolcast-form/schoolcast-form.component';
import { SchoolCategoryListComponent } from './dashboard/school-categories/school-category-list/school-category-list.component';
import { SchoolCategoryFormComponent } from './dashboard/school-categories/school-category-form/school-category-form.component';
import { SchoolReligionListComponent } from './dashboard/school-religions/school-religion-list/school-religion-list.component';
import { SchoolReligionFormComponent } from './dashboard/school-religions/school-religion-form/school-religion-form.component';
import { SchoolSectionListComponent } from './dashboard/school-sections/school-section-list/school-section-list.component';
import { SchoolSectionFormComponent } from './dashboard/school-sections/school-section-form/school-section-form.component';
import { SchoolSubcastListComponent } from './dashboard/school-subcastes/school-subcast-list/school-subcast-list.component';
import { SchoolSubcastFormComponent } from './dashboard/school-subcastes/school-subcast-form/school-subcast-form.component';
import { SectionListComponent } from './dashboard/section/section-list/section-list.component';
import { SectionFormComponent } from './dashboard/section/section-form/section-form.component';
import { StatesListComponent } from './dashboard/states/states-list/states-list.component';
import { StatesFormComponent } from './dashboard/states/states-form/states-form.component';
import { SubCastListComponent } from './dashboard/subcast/sub-cast-list/sub-cast-list.component';
import { SubCastFormComponent } from './dashboard/subcast/sub-cast-form/sub-cast-form.component';
import { TalukaListComponent } from './dashboard/taluka/taluka-list/taluka-list.component';
import { TalukaFormComponent } from './dashboard/taluka/taluka-form/taluka-form.component';
import { UserListComponent } from './dashboard/users/user-list/user-list.component';
import { UserFormComponent } from './dashboard/users/user-form/user-form.component';


//Routing
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'acadmicyear', component: AcadmicyearComponent },
      { path: 'acadmicyear/:id', component: AcadmicYearFormComponent },
      { path: 'admission', component: AdmissionComponent },
      { path: 'admission/:id', component: AdmissionFormComponent },
      { path: 'admissiontype', component: AdmissionTypesComponent },
      { path: 'admissiontype/:id', component: AdmissionTypeFormComponent },
      { path: 'cast', component: CastComponent },
      { path: 'cast/:id', component: CastFormComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/:id', component: CategoryFormComponent },
      { path: 'country', component: CountryComponent },
      { path: 'country/:id', component: CountryFormComponent },
      { path: 'district', component: DistrictComponent },
      { path: 'district/:id', component: DistrictFormComponent },
      { path: 'division', component: DivisionComponent },
      { path: 'division/:id', component: DivisionFormComponent },
      { path: 'Create Institute', component: InstitudesComponent },
      { path: 'Create Institute/:id', component: InstituteFormComponent },
      { path: 'Manage Institute', component: InstitudesComponent },
      { path: 'Manage Institute/:id', component: InstituteFormComponent },
      { path: 'ocupation', component: OcupationComponent },
      { path: 'ocupation/:id', component: OcupationFormComponent },
      { path: 'permission', component: PermissionComponent },
      { path: 'permission/:id', component: PermissionNewComponent },
      { path: 'relition', component: RelitionComponent },
      { path: 'relition/:id', component: RelitionFormComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'roles/:id', component: RolenewComponent },
      { path: 'Create Sanstha', component: SansthaComponent },
      { path: 'Manage Sanstha', component: SansthaComponent },
      { path: 'Create School', component: SchoolComponent },
      { path: 'Manage School', component: SchoolComponent },
      { path: 'schoolcastes', component: SchoolCastesComponent },
      { path: 'schoolcastes/:id', component: SchoolcastFormComponent },
      { path: 'schoolcategorys', component: SchoolCategoriesComponent },
      { path: 'schoolcategorys/:id', component: SchoolCategoryFormComponent },
      { path: 'schoolreligions', component: SchoolReligionsComponent },
      { path: 'schoolreligions/:id', component: SchoolReligionFormComponent },
      { path: 'schoolsections', component: SchoolSectionsComponent },
      { path: 'schoolsections/:id', component: SchoolSectionFormComponent },
      { path: 'schoolsubcastes', component: SchoolSubcastesComponent },
      { path: 'schoolsubcastes/:id', component: SchoolSubcastFormComponent },
      { path: 'Create school', component: SchoolsComponent },
      { path: 'Create school/:id', component: SchoolFormComponent },
      { path: 'section', component: SectionComponent },
      { path: 'section/:id', component: SectionFormComponent },
      { path: 'states', component: StatesComponent },
      { path: 'states/:id', component: StatesFormComponent },
      { path: 'subcast', component: SubcastComponent },
      { path: 'subcast/:id', component: SubCastFormComponent },
      { path: 'taluka', component: TalukaComponent },
      { path: 'taluka/:id', component: TalukaFormComponent },
      { path: 'Create Admin', component: UsersComponent },
      { path: 'Create Admin/:id', component: UserFormComponent },
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
