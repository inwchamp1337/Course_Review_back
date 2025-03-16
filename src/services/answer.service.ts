import prisma from '../db/client.ts'

export const AnswerService = {
    create: async (questionId: number, data: any) =>
        await prisma.answer.create({
            data: { ...data, questionId }
        })
}