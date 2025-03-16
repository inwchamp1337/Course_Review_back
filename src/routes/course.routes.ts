// src/routes/course.routes.ts
import { Elysia, t } from 'elysia'
import { CourseService } from '../services/course.service.ts'

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
    .post('/',
        async ({ body }) => await CourseService.create(body),
        {
            body: t.Object({
                course_id: t.Number(),
                name: t.String(),
                nameTH: t.String()
            }),
            detail: {
                tags: ['Course'],
                summary: 'Create new course',
                responses: {
                    201: { description: 'Course created successfully' }
                }
            }
        }
    )