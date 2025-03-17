import prisma from '../db/client.ts'

export const ReviewService = {
    // Create a review
    create: async (courseId: number, data: any) =>
        await prisma.review.create({
            data: { ...data, courseId }
        }),

    // Get reviews by courseId
    getByCourse: async (courseId: number) =>
        await prisma.review.findMany({ where: { courseId } }),

    // Get all reviews
    getAll: async () => {
        try {
            // Using Prisma to fetch all reviews
            const reviews = await prisma.review.findMany();
            return reviews;
        } catch (error) {
            throw new Error('Failed to fetch reviews');
        }
    },

    // Delete a review by id
    delete: async (id: number, passcode_pin: string) => {
        try {
            // ตรวจสอบคำตอบที่มี id ก่อน
            const answer = await prisma.answer.findUnique({
                where: { id },
            });

            // ถ้าไม่พบคำตอบ ให้โยนข้อผิดพลาด
            if (!answer) {
                throw new Error('Answer not found');
            }

            // ตรวจสอบว่า passcode_pin ตรงกับคำตอบหรือไม่
            if (answer.passcode_pin !== passcode_pin) {
                throw new Error('Invalid passcode_pin');
            }

            // ลบคำตอบ
            const deletedAnswer = await prisma.answer.delete({
                where: { id }
            });

            return deletedAnswer;  // ส่งข้อมูลของคำตอบที่ถูกลบกลับ
        } catch (error) {
            throw new Error(`Failed to delete answer: ${error.message}`);
        }
    }
}
