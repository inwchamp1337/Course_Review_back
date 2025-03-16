import { Elysia, t } from 'elysia'
import { QuestionService } from '../services/question.service.ts'

export const questionRoutes = new Elysia({ prefix: '/questions' })
    .post('/', async ({ body }) =>
        await QuestionService.create(body.courseId, body), {
        body: t.Object({
            courseId: t.Number(),
            questionText: t.String()
        })
    })
    .get('/course/:courseId', async ({ params }) =>
        await QuestionService.getByCourse(Number(params.courseId)), {
        params: t.Object({ courseId: t.Numeric() })
    })