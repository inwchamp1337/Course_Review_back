import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { cors } from '@elysiajs/cors' // <-- นำเข้า cors
import { api } from './routes/api'

export const app = new Elysia()
    .use(cors()) // เปิดใช้งาน CORS ก่อนตัวอื่น
    .use(
        swagger({
            path: '/docs',
            documentation: {
                info: {
                    title: 'Course API Docs',
                    version: '1.0.0'
                }
            }
        })
    )
    .use(api)
    .onError(({ error }) => {
        console.error(error)
        return { error: error.message }
    })
