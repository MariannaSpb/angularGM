import { CourseInstance } from '../course/course';

export const COURSES: CourseInstance [] = [
    {
        id: 1,
        title: 'Video Course 1. Name tag',
        duration: 100,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        date: new Date(6),
        isRated: true,
    },
    {
        id: 2,
        title: 'Video Course 2. Name tag',
        duration: 80,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        date: new Date(),
        isRated: false,
    },
    {
        id: 3,
        title: 'Video Course 3. Name tag',
        duration: 146,
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or colleges classes. Theyre published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        date: new Date(),
        isRated: true,
    },

];
