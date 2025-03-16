import { Elysia } from 'elysia'
import { api } from './routes/api.ts'

// ต้อง export instance ของ Elysia โดยตรง
export const app = new Elysia()
    .use(api)
    .onError(({ error, set }) => {
        console.error(error)
        set.status = 500
        return { error: 'Internal Server Error' }
    })

// ลบบรรทัดนี้ทิ้งไป
// export type App = typeof app