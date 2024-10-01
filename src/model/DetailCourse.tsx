// Base response interface
import Course from "@/model/courses";
import Review from "@/parts/Review";

interface ApiResponse {
    status: string;
    data: Data;
}

// Data structure interface
interface Data {
    mentor: Mentor;
    course: Course;
    imageCourse: ImageCourse[]; // Adjust this type if you know the structure of imageCourse
    chapters: Chapter[]; // Adjust this type if you know the structure of chapters
    reviews: Reviews[]; // Adjust this type if you know the structure of reviews
    totalStudent: number;
    totalVideos: number;
}

// Mentor structure interface
interface Mentor {
    id: string;
    name: string;
    profile?: string;
    email: string;
    profession?: string;
}

interface ImageCourse {
    id: string,
    courseId: string,
    image: string,
}

interface Chapter {
    id: string,
    name: string,
    lesson: Lesson[],
}

interface Lesson {
    id: string,
    name: string,
    video: string,
}

interface Reviews {
    id: string,
    rating: number,
    note: string,
    user: User,
}

interface User {
    id: number,
    name: string,
    email: string,
    role: string,
    profession: string,
    avatar: string,
}

export default ApiResponse;