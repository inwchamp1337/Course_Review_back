// prisma/seeds/reviewSeeder.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedReview(courseId: number) {
    const review = await prisma.review.create({
        data: {
            reviewerName: 'John Doe',
            reviewText: 'Excellent course! Highly recommended.',
            homeScore: 5,
            interestScore: 5,
            grade: 'A',
            academicYear: '2024',
            section: 'Section 1',
            courseId: courseId,
        },
    });

    console.log('Review created:', review);
}

seedReview(1)  // Change this to an actual course ID from the Course Seeder
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
