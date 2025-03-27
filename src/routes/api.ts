import { Elysia } from 'elysia'
import { courseRoutes } from './course.routes'
import { reviewRoutes } from './review.routes'
import { questionRoutes } from './question.routes'
import { answerRoutes } from './answer.routes'
//pasin ratcharak
export const api = new Elysia({ prefix: '/api' })
    .use(courseRoutes)
    .use(reviewRoutes)
    .use(questionRoutes)
    .use(answerRoutes)