import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import csv from 'csv-parser';

const prisma = new PrismaClient();

async function importCourses() {
    const courses = [];

    fs.createReadStream('course_details.csv') // 👈 ใส่ชื่อไฟล์ CSV ของคุณ
        .pipe(csv())
        .on('data', (row) => {
            courses.push({
                course_id: parseInt(row['Subject Code (TH)']),
                course_id_INT: parseInt(row['Subject Code (INTER)']),
                nameTH: row['Course Name'],
                name: row['Course Name'],
                description: row['Course Name (TH)']
            });
        })
        .on('end', async () => {
            console.log(`📥 Importing ${courses.length} courses...`);

            await prisma.course.createMany({
                data: courses,
                skipDuplicates: true, // ข้ามถ้า course_id ซ้ำ
            });

            console.log('✅ Import completed!');
            await prisma.$disconnect();
        });
}

importCourses();
