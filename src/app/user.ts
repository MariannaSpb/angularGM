export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    fakeToken: string;
    login: string;
    password: string;
}

export class UserInstance implements IUser {
    constructor(public id: number, public firstName: string, public lastName: string, public fakeToken: string, public login: string, public password: string) {}
}
