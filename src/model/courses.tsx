export default interface Course {
    id: string;
    name: string;
    certificate: boolean;
    thumbnail: string;
    type: string;
    status: string;
    price: number;
    level: string;
    description: string | null;
    mentorId: string;
    createdAt: string;
    updatedAt: string;
}