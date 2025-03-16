import prisma from '../db/client.ts'

export const QuestionService = {
    create: async (courseId: number, data: any) =>
        await prisma.question.create({
            data: { ...data, courseId }
        }),

    getByCourse: async (courseId: number) =>
        await prisma.question.findMany({
            where: { courseId },
            include: { answers: true }
        })
}