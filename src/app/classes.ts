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
}