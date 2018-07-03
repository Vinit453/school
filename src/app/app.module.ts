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
import { AcadmicYearService } from './dashboard/acadmicyear/acadmic-year.service';
import { AdmissionService } from './dashboard/admission/admission.service';
import { AdmissionTypeService } from './dashboard/admission-types/admission-type.service';
import { CastService } from './dashboard/cast/cast.service';
import { CategoryService } from './dashboard/category/category.service';
import { CountryService } from './dashboard/country/country.service';
import { DistrictService } from './dashboard/district/district.service';
import { DivisionService } from './dashboard/division/division.service';
import { InstitudesService } from './dashboard/institudes/institudes.service';
import { OcupationService } from './dashboard/ocupation/ocupation.service';
import { RelitionService } from './dashboard/relition/relition.service';
import { SansthaService } from './dashboard/sanstha/sanstha.service';
import { SchoolService } from './dashboard/school/school.service';
import { SchoolCastService } from './dashboard/school-castes/school-cast.service';
import { SchoolCategoriesService } from './dashboard/school-categories/school-categories.service';
import { SchoolReligionsService } from './dashboard/school-religions/school-religions.service';
import { SchoolSectionService } from './dashboard/school-sections/school-section.service';
import { SchoolsubCastesService } from './dashboard/school-subcastes/schoolsub-castes.service';
import { SectionService } from './dashboard/section/section.service';
import { StatesService } from './dashboard/states/states.service';
import { SubcastService } from './dashboard/subcast/subcast.service';
import { TalkuaService } from './dashboard/taluka/talkua.service';
import { UsersService } from './dashboard/users/users.service';
import { CashbookComponent } from './dashboard/cashbook/cashbook.component';
import { CashbookCrudTabComponent } from './dashboard/cashbook/cashbook-crud-tab/cashbook-crud-tab.component';
import { CashbookReportTabComponent } from './dashboard/cashbook/cashbook-report-tab/cashbook-report-tab.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NewCashbookComponent } from './dashboard/cashbook/cashbook-crud-tab/new-cashbook/new-cashbook.component';
import { MatDialogModule } from '@angular/material';
import { CashTransferTabComponent } from './dashboard/cashbook/cash-transfer-tab/cash-transfer-tab.component';
import { OpeningBalanceTabComponent } from './dashboard/cashbook/opening-balance-tab/opening-balance-tab.component';
import { TransactionsTabComponent } from './dashboard/cashbook/transactions-tab/transactions-tab.component';
import { FeeComponent } from './dashboard/fee/fee.component';
import { FeeCollectionComponent } from './dashboard/fee/fee-collection/fee-collection.component';
import { FeeBankDetailsComponent } from './dashboard/fee/fee-bank-details/fee-bank-details.component';
import { ChallanComponent } from './dashboard/fee/challan/challan.component';
import { CountryTabComponent } from './dashboard/country/country-tab/country-tab.component';
import { StateTabComponent } from './dashboard/country/state-tab/state-tab.component';
import { DistrictTabComponent } from './dashboard/country/district-tab/district-tab.component';
import { TalukaTabComponent } from './dashboard/country/taluka-tab/taluka-tab.component';
import { ReligionComponent } from './dashboard/religion/religion.component';
import { ReligionTabComponent } from './dashboard/religion/religion-tab/religion-tab.component';
import { CasteTabComponent } from './dashboard/religion/caste-tab/caste-tab.component';
import { SubcasteTabComponent } from './dashboard/religion/subcaste-tab/subcaste-tab.component';
import { CategoryTabComponent } from './dashboard/religion/category-tab/category-tab.component';

// import {  } from './d;

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
    PermissionNewComponent,
    AcadmicYearListComponent,
    AcadmicYearFormComponent,
    AdmissionListComponent,
    AdmissionFormComponent,
    AdmissionTypeListComponent,
    AdmissionTypeFormComponent,
    CastListComponent,
    CastFormComponent,
    CategoryListComponent,
    CategoryFormComponent,
    CountryListComponent,
    CountryFormComponent,
    DistrictListComponent,
    DistrictFormComponent,
    DivisionListComponent,
    DivisionFormComponent,
    InstituteListComponent,
    InstituteFormComponent,
    OcupationListComponent,
    OcupationFormComponent,
    RelitionListComponent,
    RelitionFormComponent,
    SansthaListComponent,
    SansthaFormComponent,
    SchoolListComponent,
    SchoolFormComponent,
    SchoolcastListComponent,
    SchoolcastFormComponent,
    SchoolCategoryListComponent,
    SchoolCategoryFormComponent,
    SchoolReligionListComponent,
    SchoolReligionFormComponent,
    SchoolSectionListComponent,
    SchoolSectionFormComponent,
    SchoolSubcastListComponent,
    SchoolSubcastFormComponent,
    SectionListComponent,
    SectionFormComponent,
    StatesListComponent,
    StatesFormComponent,
    SubCastListComponent,
    SubCastFormComponent,
    TalukaListComponent,
    TalukaFormComponent,
    UserListComponent,
    UserFormComponent,
    CashbookComponent,
    CashbookCrudTabComponent,
    CashbookReportTabComponent,
    NewCashbookComponent,
    CashTransferTabComponent,
    OpeningBalanceTabComponent,
    TransactionsTabComponent,
    FeeComponent,
    FeeCollectionComponent,
    FeeBankDetailsComponent,
    ChallanComponent,
    CountryTabComponent,
    StateTabComponent,
    DistrictTabComponent,
    TalukaTabComponent,
    ReligionComponent,
    ReligionTabComponent,
    CasteTabComponent,
    SubcasteTabComponent,
    CategoryTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatDialogModule
  ],
  providers: [
    SchoolManagementService,
    RoleServiceService,
    AcadmicYearService,
    AdmissionService,
    AdmissionTypeService,
    CastService,
    CategoryService,
    CountryService,
    DistrictService,
    DivisionService,
    InstitudesService,
    OcupationService,
    RelitionService,
    SansthaService,
    SchoolService,
    SchoolCastService,
    SchoolCategoriesService,
    SchoolReligionsService,
    SchoolSectionService,
    SchoolsubCastesService,
    SectionService,
    StatesService,
    SubcastService,
    TalkuaService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
