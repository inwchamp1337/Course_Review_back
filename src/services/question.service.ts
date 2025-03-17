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
        }),

    getAll: async () => {
        try {
            // Using Prisma to fetch all reviews
            const questions = await prisma.question.findMany();
            return questions;
        } catch (error) {
            throw new Error('Failed to fetch reviews');
        }
    },

    delete: async (id: number) => {
        try {
            // Delete question by id
            const deletedQuestion = await prisma.question.delete({
                where: { id }
            });
            return deletedQuestion; // Return the deleted question
        } catch (error) {
            throw new Error('Failed to delete question');
        }
    }
}
