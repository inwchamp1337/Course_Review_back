import { Elysia, t } from 'elysia'
import { ReviewService } from '../services/review.service.ts'

export const reviewRoutes = new Elysia({ prefix: '/reviews' })
    .post('/', async ({ body }) =>
        await ReviewService.create(body.courseId, body),
        {
            body: t.Object({
                courseId: t.Number(),
                reviewerName: t.String(),
                reviewText: t.String(),
                homeScore: t.Number(),
                interestScore: t.Number(),
                grade: t.String(),
                academicYear: t.String(),
                section: t.String(),
                passcode_pin: t.String()
            })
        }
    )
    .get('/course/:courseId', async ({ params }) =>
        await ReviewService.getByCourse(Number(params.courseId)),
        {
            params: t.Object({ courseId: t.Numeric() })
        }
    )
    .get('/', async () =>
        await ReviewService.getAll()
    )
    // Route สำหรับลบรีวิว พร้อมตรวจสอบ passcode_pin จาก body
    .delete('/:id', async ({ params, body }) => {
        const { passcode_pin } = body;
        try {
            const deletedReview = await ReviewService.delete(Number(params.id), passcode_pin);
            return { message: 'Review deleted successfully', deletedReview };
        } catch (error) {
            return { message: error.message };
        }
    }, {
        body: t.Object({
            passcode_pin: t.String()
        })
    });
