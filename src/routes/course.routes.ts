import { Elysia, t } from 'elysia'
import { CourseService } from '../services/course.service.ts'

export const courseRoutes = new Elysia({ prefix: '/courses' })
    .get('/', async () => await CourseService.getAll())
    .get('/:id', async ({ params }) => await CourseService.getById(Number(params.id)), {
        params: t.Object({ id: t.Numeric() })
    })
    .post('/', async ({ body }) => await CourseService.create(body), {
        body: t.Object({
            course_id: t.Number(),
            name: t.String(),
            nameTH: t.String(),
            description: t.Optional(t.String()),
            image: t.Optional(t.String())
        })
    })
    .put('/:id', async ({ params, body }) =>
        await CourseService.update(Number(params.id), body), {
        params: t.Object({ id: t.Numeric() }),
        body: t.Partial(t.Object({
            name: t.String(),
            nameTH: t.String(),
            description: t.String(),
            image: t.String()
        }))
    })
    .delete('/:id', async ({ params }) =>
        await CourseService.delete(Number(params.id)), {
        params: t.Object({ id: t.Numeric() })
    })