import { PrismaClient } from '@prisma/client';
import ExcelJS from 'exceljs';

const prisma = new PrismaClient();

async function exportToExcel() {
    // ดึงข้อมูลจาก Prisma
    const reviews = await prisma.review.findMany();

    // สร้าง workbook และ sheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reviews');

    // เพิ่ม header ใน sheet
    worksheet.columns = [
        { header: 'Reviewer Name', key: 'reviewerName' },
        { header: 'Review Text', key: 'reviewText' },
        { header: 'Home Score', key: 'homeScore' },
        { header: 'Interest Score', key: 'interestScore' },
        { header: 'Grade', key: 'grade' },
        { header: 'Academic Year', key: 'academicYear' },
        { header: 'Section', key: 'section' },
        { header: 'Course ID', key: 'course_id' },
    ];

    // เพิ่มข้อมูลลงใน worksheet
    reviews.forEach((review) => {
        worksheet.addRow(review);
    });

    // บันทึกไฟล์ Excel
    await workbook.xlsx.writeFile('reviews.xlsx');
    console.log('File saved as reviews.xlsx');
}

exportToExcel().catch((e) => console.error(e)).finally(() => prisma.$disconnect());
