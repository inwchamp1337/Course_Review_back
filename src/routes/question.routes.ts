import { Elysia, t } from 'elysia'
import { QuestionService } from '../services/question.service'
import { hashPassword } from "../utils/hash";

export const questionRoutes = new Elysia({ prefix: '/questions' })
    .post('/', 
        async ({ body }) => {
            // แฮช passcode_pin ก่อนบันทึก
            body.passcode_pin = await hashPassword(body.passcode_pin);
    
            // บันทึกข้อมูล
            return await QuestionService.create(body.courseId, body);
        }, 
        {
            body: t.Object({
                courseId: t.Number(),
                questionText: t.String(),
                questionerName: t.String(), // เพิ่ม questionerName
                passcode_pin: t.String()
            })
        }
    )
    .get('/course/:courseId', async ({ params }) =>
        await QuestionService.getByCourse(Number(params.courseId)), {
        params: t.Object({ courseId: t.Numeric() })
    })
    .get('/', async () =>
        await QuestionService.getAll()  // ไม่ต้องตรวจสอบการ validate
    )
    .delete('/:id', async ({ params, body }) => {
        const { passcode_pin } = body;
        try {
            const deletedQuestion = await QuestionService.delete(Number(params.id), passcode_pin);
            return { message: 'Question deleted successfully', deletedQuestion };
        } catch (error) {
            if (error instanceof Error) {
                return { message: error.message };
            }
            return { message: 'An unknown error occurred' };
        }
    }, {
        body: t.Object({
            passcode_pin: t.String()
        })
    });
