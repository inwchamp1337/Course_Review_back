import { Elysia, t } from 'elysia'
import { ReviewService } from '../services/review.service.ts'

export const reviewRoutes = new Elysia({ prefix: '/reviews' })
    .post('/', async ({ body }) =>
        await ReviewService.create(body.courseId, body), {
        body: t.Object({
            courseId: t.Number(),
            reviewerName: t.String(),
            reviewText: t.String(),
            homeScore: t.Number(),
            interestScore: t.Number(),
            grade: t.String(),
            academicYear: t.String(),
            section: t.String()
        })
    })
    .get('/course/:courseId', async ({ params }) =>
        await ReviewService.getByCourse(Number(params.courseId)), {
        params: t.Object({ courseId: t.Numeric() })
    })
    .get('/', async () =>
        await ReviewService.getAll(), {
        response: t.Array(t.Object({
            courseId: t.Number(),
            reviewerName: t.String(),
            reviewText: t.String(),
            homeScore: t.Number(),
            interestScore: t.Number(),
            grade: t.String(),
            academicYear: t.String(),
            section: t.String()
        }))
    })
