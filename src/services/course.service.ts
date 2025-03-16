import prisma from '../db/client.ts'

export const CourseService = {
    getAll: async () => await prisma.course.findMany(),

    getById: async (id: number) =>
        await prisma.course.findUnique({
            where: { id },
            include: { reviews: true, questions: { include: { answers: true } } }
        }),

    create: async (data: any) =>
        await prisma.course.create({ data }),

    update: async (id: number, data: any) =>
        await prisma.course.update({ where: { id }, data }),

    delete: async (id: number) =>
        await prisma.course.delete({ where: { id } })
}