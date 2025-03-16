// src/types/index.ts
import { t } from 'elysia'

export const CourseSchema = t.Object({
    id: t.Number(),
    course_id: t.Number(),
    name: t.String(),
    nameTH: t.String()
})