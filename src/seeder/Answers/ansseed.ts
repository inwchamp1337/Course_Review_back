import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// Mock data สำหรับ Review
// Mock data สำหรับ Review
// Mock data สำหรับ Review
const reviewsMock = [
    // course_id: 90644888
    { reviewerName: 'John Doe', reviewText: 'Great course, very informative.', homeScore: 4, interestScore: 5, grade: 'A', academicYear: '2023', section: 'A', course_id: 90644888 },
    { reviewerName: 'Jane Smith', reviewText: 'Interesting content but could be more interactive.', homeScore: 3, interestScore: 4, grade: 'B', academicYear: '2023', section: 'B', course_id: 90644888 },
    { reviewerName: 'Alice Johnson', reviewText: 'Well-structured, but the lectures could be more engaging.', homeScore: 3, interestScore: 3, grade: 'B', academicYear: '2023', section: 'C', course_id: 90644888 },
    { reviewerName: 'Bob Brown', reviewText: 'Fantastic course, learned a lot of practical skills.', homeScore: 5, interestScore: 5, grade: 'A', academicYear: '2023', section: 'A', course_id: 90644888 },
    { reviewerName: 'Charlie Davis', reviewText: 'Too much theory, not enough hands-on work.', homeScore: 2, interestScore: 3, grade: 'C', academicYear: '2023', section: 'D', course_id: 90644888 },

    // course_id: 90643888
    { reviewerName: 'David Lee', reviewText: 'Excellent overview of the topic, would recommend.', homeScore: 5, interestScore: 5, grade: 'A', academicYear: '2023', section: 'A', course_id: 90643888 },
    { reviewerName: 'Eva White', reviewText: 'Course was good but lacked practical examples.', homeScore: 3, interestScore: 4, grade: 'B', academicYear: '2023', section: 'B', course_id: 90643888 },
    { reviewerName: 'Frank Miller', reviewText: 'Highly informative but the pace was a bit fast.', homeScore: 4, interestScore: 3, grade: 'B', academicYear: '2023', section: 'C', course_id: 90643888 },
    { reviewerName: 'Grace Adams', reviewText: 'I learned a lot, but I wish there was more interaction.', homeScore: 3, interestScore: 4, grade: 'B', academicYear: '2023', section: 'A', course_id: 90643888 },
    { reviewerName: 'Hannah Clark', reviewText: 'Not enough time spent on each topic, felt rushed.', homeScore: 2, interestScore: 3, grade: 'C', academicYear: '2023', section: 'D', course_id: 90643888 },

    // course_id: 90642216
    { reviewerName: 'Ivy Wilson', reviewText: 'Great introduction to the subject, very detailed.', homeScore: 5, interestScore: 5, grade: 'A', academicYear: '2023', section: 'A', course_id: 90642216 },
    { reviewerName: 'Jack Moore', reviewText: 'Too theoretical, needed more examples.', homeScore: 3, interestScore: 3, grade: 'B', academicYear: '2023', section: 'B', course_id: 90642216 },
    { reviewerName: 'Kathy Harris', reviewText: 'Well-organized course but could be more engaging.', homeScore: 4, interestScore: 3, grade: 'B', academicYear: '2023', section: 'C', course_id: 90642216 },
    { reviewerName: 'Liam Scott', reviewText: 'Interesting but lacked real-world applications.', homeScore: 3, interestScore: 4, grade: 'B', academicYear: '2023', section: 'A', course_id: 90642216 },
    { reviewerName: 'Megan Lee', reviewText: 'The course was okay but expected more hands-on projects.', homeScore: 3, interestScore: 3, grade: 'C', academicYear: '2023', section: 'D', course_id: 90642216 },

    // course_id: 90642207
    { reviewerName: 'Noah Thomas', reviewText: 'Fantastic course with many real-life examples.', homeScore: 5, interestScore: 5, grade: 'A', academicYear: '2023', section: 'A', course_id: 90642207 },
    { reviewerName: 'Olivia Jackson', reviewText: 'Very informative but too much focus on theory.', homeScore: 3, interestScore: 4, grade: 'B', academicYear: '2023', section: 'B', course_id: 90642207 },
    { reviewerName: 'Paul Allen', reviewText: 'Well-structured, but needed more interactive elements.', homeScore: 4, interestScore: 4, grade: 'A', academicYear: '2023', section: 'C', course_id: 90642207 },
    { reviewerName: 'Quinn Turner', reviewText: 'The course was engaging and informative, would take again.', homeScore: 5, interestScore: 5, grade: 'A', academicYear: '2023', section: 'A', course_id: 90642207 },
    { reviewerName: 'Rachel Lee', reviewText: 'Not enough practical exercises to apply what was learned.', homeScore: 3, interestScore: 3, grade: 'B', academicYear: '2023', section: 'D', course_id: 90642207 },

    // course_id: 90642030
    { reviewerName: 'Samuel Green', reviewText: 'Great course with lots of examples to help clarify the concepts.', homeScore: 5, interestScore: 5, grade: 'A', academicYear: '2023', section: 'A', course_id: 90642030 },
    { reviewerName: 'Tina Parker', reviewText: 'Solid content, but the pace was a bit slow.', homeScore: 4, interestScore: 3, grade: 'B', academicYear: '2023', section: 'B', course_id: 90642030 },
    { reviewerName: 'Uma Black', reviewText: 'The course was good but expected more interactive learning.', homeScore: 3, interestScore: 3, grade: 'B', academicYear: '2023', section: 'C', course_id: 90642030 },
    { reviewerName: 'Vera White', reviewText: 'Good course, but I wish there were more hands-on exercises.', homeScore: 4, interestScore: 4, grade: 'A', academicYear: '2023', section: 'A', course_id: 90642030 },
    { reviewerName: 'Willow Brown', reviewText: 'Not much new content, but still useful.', homeScore: 2, interestScore: 3, grade: 'C', academicYear: '2023', section: 'D', course_id: 90642030 },

    // course_id: 90642052
    { reviewerName: 'Xander Hall', reviewText: 'Fantastic course with a lot of hands-on projects.', homeScore: 5, interestScore: 5, grade: 'A', academicYear: '2023', section: 'A', course_id: 90642052 },
    { reviewerName: 'Yara King', reviewText: 'Good content, but could be improved with more practical examples.', homeScore: 3, interestScore: 4, grade: 'B', academicYear: '2023', section: 'B', course_id: 90642052 },
    { reviewerName: 'Zachary Allen', reviewText: 'Very engaging and informative, great experience.', homeScore: 5, interestScore: 5, grade: 'A', academicYear: '2023', section: 'C', course_id: 90642052 },
    { reviewerName: 'Amelia Scott', reviewText: 'Great course with many useful techniques to apply in real life.', homeScore: 4, interestScore: 4, grade: 'B', academicYear: '2023', section: 'A', course_id: 90642052 },
    { reviewerName: 'Benjamin Clark', reviewText: 'Content was relevant, but needed more real-world applications.', homeScore: 3, interestScore: 3, grade: 'B', academicYear: '2023', section: 'D', course_id: 90642052 },

    // course_id: 90642080
    { reviewerName: 'Catherine Harris', reviewText: 'Loved the course, highly recommend it!', homeScore: 5, interestScore: 5, grade: 'A', academicYear: '2023', section: 'A', course_id: 90642080 },
    { reviewerName: 'Daniel Walker', reviewText: 'Good overall, but the content could be more diverse.', homeScore: 3, interestScore: 3, grade: 'B', academicYear: '2023', section: 'B', course_id: 90642080 },
    { reviewerName: 'Ethan King', reviewText: 'The course was great, but the workload was a bit too much.', homeScore: 4, interestScore: 4, grade: 'A', academicYear: '2023', section: 'C', course_id: 90642080 },
    { reviewerName: 'Faith Lewis', reviewText: 'Interesting, but needed more discussion-based activities.', homeScore: 3, interestScore: 4, grade: 'B', academicYear: '2023', section: 'D', course_id: 90642080 },
    { reviewerName: 'George Young', reviewText: 'Fantastic experience, I learned a lot.', homeScore: 5, interestScore: 5, grade: 'A', academicYear: '2023', section: 'A', course_id: 90642080 },
];

// Mock data สำหรับ Question
const questionsMock = [
    { questionText: 'What is the main objective of this course?', course_id: 90644888 },
    { questionText: 'What skills are developed in this course?', course_id: 90644888 },
    { questionText: 'How is the content structured in this course?', course_id: 90643888 },
    { questionText: 'What are the prerequisites for this course?', course_id: 90643888 },
    { questionText: 'What tools are used in this course?', course_id: 90642216 },
    { questionText: 'What kind of assessment is used in this course?', course_id: 90642216 },
    { questionText: 'What are the key learning outcomes of this course?', course_id: 90642207 },
    { questionText: 'How much practical work is involved in this course?', course_id: 90642207 },
    { questionText: 'What is the course format for this course?', course_id: 90642030 },
    { questionText: 'Is this course suitable for beginners?', course_id: 90642030 },
    { questionText: 'How can I access the course materials?', course_id: 90642052 },
    { questionText: 'What are the grading criteria for this course?', course_id: 90642052 },
    { questionText: 'Are there any group projects in this course?', course_id: 90642080 },
    { questionText: 'What resources are available to help students in this course?', course_id: 90642080 },
];

// Mock data สำหรับ Answer
const answersMock = [
    { answerText: 'The objective is to enhance presentation skills.', question_id: 1 },
    { answerText: 'Skills such as effective communication and audience engagement are developed.', question_id: 2 },
    { answerText: 'Content is structured in modules, each covering a key concept.', question_id: 3 },
    { answerText: 'You need basic knowledge of programming for this course.', question_id: 4 },
    { answerText: 'The course uses a variety of tools, including online platforms and software.', question_id: 5 },
    { answerText: 'Assessment includes both written exams and practical projects.', question_id: 6 },
    { answerText: 'Key learning outcomes include critical thinking and problem-solving skills.', question_id: 7 },
    { answerText: 'The course involves a mix of lectures and hands-on work.', question_id: 8 },
    { answerText: 'The course format is a combination of lectures, discussions, and workshops.', question_id: 9 },
    { answerText: 'Yes, the course is suitable for beginners with no prior experience.', question_id: 10 },
    { answerText: 'Course materials are available online and can be accessed anytime.', question_id: 11 },
    { answerText: 'The grading criteria include assignments, exams, and participation.', question_id: 12 },
    { answerText: 'Yes, there are group projects in this course.', question_id: 13 },
    { answerText: 'Students have access to a variety of resources, including online forums and office hours.', question_id: 14 },
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
