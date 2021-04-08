export interface ICourse {
    id: number;
    title: string;
    date: Date;
    duration: number;
    description: string;
}
export class CourseInstance implements ICourse {
    constructor(public id: number, public title: string, public date: Date, public duration: number, public description: string) {}
}
