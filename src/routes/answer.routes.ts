import { Elysia, t } from 'elysia'
import { AnswerService } from '../services/answer.service.ts'

export const answerRoutes = new Elysia({ prefix: '/answers' })
    // GET: ดึงคำตอบทั้งหมด (หรือตามเงื่อนไข)
    .get('/', async () => {
        return await AnswerService.getAll()
    })
    // GET: ดึงคำตอบโดย ID
    .get('/:id', async ({ params }) => {
        return await AnswerService.getById(Number(params.id))
    }, {
        params: t.Object({
            id: t.Numeric()
        })
    })
    // POST: สร้างคำตอบใหม่
    .post('/', async ({ body }) => {
        return await AnswerService.create(body.questionId, body)
    }, {
        body: t.Object({
            questionId: t.Number(),
            answerText: t.String()
        })
    })