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
            const reviews = await prisma.review.findMany();
            return reviews;
        } catch (error) {
            throw new Error('Failed to fetch reviews');
        }
    },

    // Delete a review by id พร้อมตรวจสอบ passcode_pin
    delete: async (id: number, passcode_pin: string) => {
        try {
            // ค้นหา review จากฐานข้อมูลโดยใช้ id
            const review = await prisma.review.findUnique({
                where: { id },
            });

            // ถ้าไม่พบ review ให้โยน error
            if (!review) {
                throw new Error('Review not found');
            }

            // ตรวจสอบว่า passcode_pin ที่ส่งเข้ามาตรงกับที่เก็บไว้ใน review หรือไม่
            if (review.passcode_pin !== passcode_pin) {
                throw new Error('Invalid passcode_pin');
            }

            // ลบ review
            const deletedReview = await prisma.review.delete({
                where: { id }
            });

            return deletedReview;
        } catch (error) {
            throw new Error(`Failed to delete review: ${error.message}`);
        }
    }
}
