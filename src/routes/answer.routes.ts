import { Elysia, t } from 'elysia'
import { AnswerService } from '../services/answer.service.ts'

export const answerRoutes = new Elysia({ prefix: '/answers' })
    .post('/', async ({ body }) =>
        await AnswerService.create(body.questionId, body), {
        body: t.Object({
            questionId: t.Number(),
            answerText: t.String()
        })
    })