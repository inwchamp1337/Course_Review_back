import prisma from '../db/client.ts'

export const ReviewService = {
    create: async (courseId: number, data: any) =>
        await prisma.review.create({
            data: { ...data, courseId }
        }),

    getByCourse: async (courseId: number) =>
        await prisma.review.findMany({ where: { courseId } })
}