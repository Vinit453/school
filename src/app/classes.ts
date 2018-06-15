import { StaticInjector } from "@angular/core/src/di/injector";

export namespace school {
    export class Login {
        constructor(
            public login_user_name: string,
            public login_password: string
        ) { }
    }

    export class role {
        id: number;
        type_name: string;
    }

    export class permission {
        id: number;
        name: string;
        roleId: number;
    }

    export class acadmicyear {
        academic_year_id: number;
        academic_year_start: string;
        academic_year_end: string;
        academic_year_status: number;
        academic_schoolid: number;
    }

    export class admission {
        admission_id: number;
        admission_first_name: string;
        admission_middle_name: string;
        admission_last_name: string;
        admission_dob: string;
        admission_gender: string
        admission_blood_group: string;
        admission_current_class: string;
        admission_adhar_no: string;
        admission_is_handicap: string;
        admission_birthplace: string;
        admission_admitted_in: string;
        admission_natinality: string;
        admission_religion_id: number;
        admission_category_id: string;
        admission_caste_id: number;
        admission_subcaste_id: number;
        admission_is_minority: string;
        admission_mother_tounge: string;
        admission_prev_school_name: string;
        admission_date: string;
        admission_pin_code: number;
        admission_register_book_no: string;
        admission_register_no: string;
        admission_saral_no: string;
        admission_father_name: string;
        admission_mother_name: string;
        admission_occoupation: string;
        admission_annual_income: number;
        admission_parent_category: string;
        admission_phone_no: string;
        admission_country_id: string;
        admission_state_id: number;
        admission_district_id: string;
        admission_taluka_id: string;
        admission_city_name: string;
        admission_street_address: string;
        admission_medium: string;
        admission_is_semi_english: string;
        admission_type: string;
        admission_photo: string;
        admission_class_id: string;
        admission_division_id: number;
        admission_is_approved: number;
        admission_is_handicap_type: string;
        admission_is_handicap_percentages: string;
        admission_school_id: number
    }

    export class admissionType {
        admission_type_id: number;
        admission_type_name: string;
        admission_type_created_date: string;
        admission_type_school_id: number;
    }

    export class subcast {
        subcaste_id: number;
        subcaste_caste_id: number;
        subcaste_name: string;
        subcaste_created_date: string;
    }

    export class category {
        id: number
        category_name: string
            // "created_date": ""
    }

    export class country {
        country_id: number;
        country_name: string;
        // country_created_date: string;
    }

    export class district {
        district_id: number;
        district_state_id: number;
        district_country_id: number;
        district_name: string;
        district_created_date: string;
    }

    export class division {
        division_id: number;
        division_name: string;
        division_class_id: number
        division_school_id: number
    }

    export class institudes {
        institude_id: string;
        institude_section_id: number;
        institude_name: string;
        institude_sansta_name: string;
        institude_address: string;
        institude_slogan: string;
        institude_register_no: string;
        institude_udise_no: string;
        institude_email: string;
        institude_board_univercity: string;
        institude_medium: string;
        institude_phone_no: string;
        institude_logo_path: string;
    }

    export class occupations {
        occupation_id: number;
        occupation_name: string;
        occupation_school_id: number
    }

    export class religions {
        id: string;
        religion_name: string;
        // created_date: string;
    }

    export class sanstha {
        id: number;
        sanstha_name: string;
        user_name: string;
        password: string;
        no_of_school: number;
        sanstha_subscription_years: string;
        sanstha_created_date: string;
        sanstha_email: string;
        sanstha_phone: string;
        sanstha_mobile: string;
        sanstha_website: string;
        sanstha_address: string;
        sanstha_slogan: string;
        sanstha_reg_no: string;
        establish_year: string;
        sanstha_date_from: string;
        sanstha_date_to: string;
    }

    export class schools {
        school_id: number;
        school_name: string;            
        school_udise_no: string;
        school_password: string;
        school_sanstha_id: number;
        school_created_date: string;
        school_email: string;
        school_phone: string;
        school_mobile: string;
        school_website: string;
        school_date_from: string;
        school_date_to: string;
        school_subscription_years: string;
        school_address: string;
        school_slogan: string;
        school_register_no: string;
        school_board_univercity: string;
        school_medium: number;
        school_is_cbsc: number;
        school_affiliation_no: string;
        school_user_category: number;
        school_logo: string;
        school_school_code: string;
        school_index_no: string;
    }

    export class schoolCastes {
        
    }

    // export class 
}
