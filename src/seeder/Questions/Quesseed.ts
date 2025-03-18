// prisma/seeds/questionSeeder.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedQuestion(courseId: number) {
    const question = await prisma.question.create({
        data: {
            questionText: 'What was the most useful aspect of the course?',
            courseId: courseId,
        },
    });

    console.log('Question created:', question);
}

seedQuestion(1)  // Change this to an actual course ID from the Course Seeder
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
