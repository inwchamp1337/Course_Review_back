import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const courseModel = {
    getAllCourses: () => prisma.course.findMany(),
    getCourseById: (id: number) => prisma.course.findUnique({ where: { id } }),
    createCourse: (data: { name: string, nameTH: string, description: string }) =>
        prisma.course.create({ data }),
};
