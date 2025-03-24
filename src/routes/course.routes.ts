import { Elysia, t } from 'elysia';
import { CourseService } from '../services/course.service';
import { hashPassword } from "../utils/hash";

export const courseRoutes = new Elysia({ prefix: '/courses' })
    .get('/',
        async () => await CourseService.getAll(),
        {
            detail: {
                tags: ['Course'],
                summary: 'Get all courses',
                responses: {
                    200: { description: 'List of all courses' }
                }
            }
        }
    )
    // เพิ่มเส้นทางสำหรับดึงข้อมูล course โดยใช้ courseId
    .get('/:courseId',
        async ({ params }) => {
            const { courseId } = params;
            return await CourseService.getById(Number(courseId)); // ส่ง courseId ให้ Service
        },
        {
            detail: {
                tags: ['Course'],
                summary: 'Get a course by courseId',
                responses: {
                    200: { description: 'Course data for the given courseId' },
                    404: { description: 'Course not found' }
                }
            }
        }
    )
    .post("/",
        async ({ body }) => {
            // แฮช passcode_pin ก่อนบันทึก
            body.passcode_pin = await hashPassword(body.passcode_pin);
    
            // บันทึกข้อมูล
            return await CourseService.create(body);
        },
        {
            body: t.Object({
                course_id: t.Number(),
                name: t.String(),
                nameTH: t.String(),
                passcode_pin: t.String()
            }),
            detail: {
                tags: ["Course"],
                summary: "Create new course",
                responses: {
                    201: { description: "Course created successfully" }
                }
            }
        }
    );
    