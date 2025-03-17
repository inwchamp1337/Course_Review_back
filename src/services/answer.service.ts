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
        }),

    // ฟังก์ชันใหม่สำหรับลบคำตอบ
    delete: async (id: number) => {
        try {
            // ลบคำตอบตาม id
            const deletedAnswer = await prisma.answer.delete({
                where: { id }
            });
            return deletedAnswer;  // ส่งข้อมูลของคำตอบที่ถูกลบกลับ
        } catch (error) {
            throw new Error('Failed to delete answer');
        }
    }
}
