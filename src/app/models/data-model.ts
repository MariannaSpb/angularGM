export interface LoginRequest {
    login: string;
    password: string;
}

export interface Author {
    id: number;
    name: string;
}


export interface Course {
    id: number;
    name: string;
    date: string | Date;
    length: number;
    description: string;
    authors: Author[];
    isTopRated: boolean;
  }

export class CourseModel implements Course {
     constructor(
        public id: number,
        public name: string,
        public isTopRated: boolean,
        public date: string | Date,
        public length: number,
        public description: string,
        public authors: Author[],
     ) {}
 }


export interface FullName {
    first: string;
    last: string;
}

export interface TokenRequest {
    token: string;
}


export interface User {
    id: number;
    fakeToken: string;
    name: FullName;
    login: string;
    password: string;
}

