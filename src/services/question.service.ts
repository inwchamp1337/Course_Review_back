import prisma from '../db/client'
import bcrypt from "bcrypt"

export const QuestionService = {
    // Create a question
    create: async (courseId: number, data: any) =>
        await prisma.question.create({
            data: { ...data, courseId }
        }),

    // Get questions by courseId
    getByCourse: async (courseId: number) =>
        await prisma.question.findMany({
            where: { courseId },
            include: { answers: true }
        }),

    // Get all questions
    getAll: async () => {
        try {
            const questions = await prisma.question.findMany();
            return questions;
        } catch (error) {
            throw new Error('Failed to fetch questions');
        }
    },

    // Delete a question by id
    delete: async (id: number, passcode_pin: string) => {
        try {
            // ค้นหา question จากฐานข้อมูลโดยใช้ id
            const question = await prisma.question.findUnique({
                where: { id },
            });

            // ถ้าไม่พบ question ให้โยน error
            if (!question) {
                throw new Error('Question not found');
            }

            // ตรวจสอบว่า passcode_pin ที่ส่งเข้ามาตรงกับที่เก็บไว้ใน question หรือไม่
            if (question.passcode_pin !== passcode_pin) {
                throw new Error('Invalid passcode_pin');
            }

            if (!question.passcode_pin) {
                throw new Error("Passcode not found");
            }
                        
            if (!(await bcrypt.compare(passcode_pin, question.passcode_pin))) {
                throw new Error("Invalid passcode_pin");
            }

            // ลบ question
            const deletedQuestion = await prisma.question.delete({
                where: { id }
            });

            return deletedQuestion;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to delete review: ${error.message}`);
              }
              throw error
        }
    }
};
