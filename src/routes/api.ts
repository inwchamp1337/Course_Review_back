import { Elysia } from 'elysia'
import { courseRoutes } from './course.routes.ts'
import { reviewRoutes } from './review.routes.ts'
import { questionRoutes } from './question.routes.ts'
import { answerRoutes } from './answer.routes.ts'

export const api = new Elysia({ prefix: '/api' })
    .use(courseRoutes)
    .use(reviewRoutes)
    .use(questionRoutes)
    .use(answerRoutes)