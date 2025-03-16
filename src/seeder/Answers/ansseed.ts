import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// Mock data สำหรับ Review
const reviewsMock = [
    { reviewerName: 'John Doe', reviewText: 'Great course, very informative.', homeScore: 4, interestScore: 5, grade: 'A', academicYear: '2023', section: 'A', course_id: 90644888 },
    { reviewerName: 'Jane Smith', reviewText: 'Interesting content but could be more interactive.', homeScore: 3, interestScore: 4, grade: 'B', academicYear: '2023', section: 'B', course_id: 90644888 },
];

// Mock data สำหรับ Question
const questionsMock = [
    { questionText: 'What is the main objective of this course?', course_id: 90644888 },
    { questionText: 'What skills are developed in this course?', course_id: 90644888 },
];

// Mock data สำหรับ Answer
const answersMock = [
    { answerText: 'The objective is to enhance presentation skills.', question_id: 1 },
    { answerText: 'Skills such as effective communication and audience engagement are developed.', question_id: 2 },
];



async function importReviews() {
    // เพิ่ม mock reviews ลงในฐานข้อมูล
    for (const review of reviewsMock) {
        // เชื่อมโยง review กับ course
        const course = await prisma.course.findUnique({
            where: { course_id: review.course_id },
        });

        if (course) {
            await prisma.review.create({
                data: {
                    reviewerName: review.reviewerName,
                    reviewText: review.reviewText,
                    homeScore: review.homeScore,
                    interestScore: review.interestScore,
                    grade: review.grade,
                    academicYear: review.academicYear,
                    section: review.section,
                    courseId: course.id,  // เชื่อมโยงกับ Course
                },
            });
        }
    }
    console.log('✅ Mock Reviews imported!');
}

async function importQuestions() {
    // เพิ่ม mock questions ลงในฐานข้อมูล
    for (const question of questionsMock) {
        // เชื่อมโยง question กับ course
        const course = await prisma.course.findUnique({
            where: { course_id: question.course_id },
        });

        if (course) {
            const createdQuestion = await prisma.question.create({
                data: {
                    questionText: question.questionText,
                    courseId: course.id,  // เชื่อมโยงกับ Course
                },
            });

            // เชื่อมโยง answer กับ question ที่เพิ่งสร้าง
            const answer = answersMock.find((ans) => ans.question_id === createdQuestion.id);
            if (answer) {
                await prisma.answer.create({
                    data: {
                        answerText: answer.answerText,
                        questionId: createdQuestion.id,  // เชื่อมโยงกับ Question
                    },
                });
            }
        }
    }
    console.log('✅ Mock Questions and Answers imported!');
}

async function runImports() {

    await importReviews();
    await importQuestions();
    console.log('✅ All Mock data imported successfully!');
    await prisma.$disconnect();
}

runImports();
