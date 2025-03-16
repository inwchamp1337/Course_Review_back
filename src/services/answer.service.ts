import prisma from '../db/client.ts'

export const AnswerService = {
    // ฟังก์ชันใหม่สำหรับดึงข้อมูล
    getAll: async () => await prisma.answer.findMany(),

    getById: async (id: number) =>
        await prisma.answer.findUnique({
            where: { id },
            include: { question: true }
        }),

    // ฟังก์ชันเดิม
    create: async (questionId: number, data: any) =>
        await prisma.answer.create({
            data: { ...data, questionId }
        })
}