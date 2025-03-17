import prisma from '../db/client.ts'

export const CourseService = {
    getAll: async () => await prisma.course.findMany(),

    // สร้าง getById ที่ค้นหาโดยใช้ course_id
    getById: async (courseId: number) =>
        await prisma.course.findUnique({
            where: { course_id: courseId },
            include: { reviews: true, questions: { include: { answers: true } } }
        }),

    create: async (data: any) =>
        await prisma.course.create({ data }),

    update: async (courseId: number, data: any) =>
        await prisma.course.update({ where: { course_id: courseId }, data }),

    delete: async (courseId: number) =>
        await prisma.course.delete({ where: { course_id: courseId } })
}
