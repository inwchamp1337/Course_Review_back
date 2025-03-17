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
    }
}
