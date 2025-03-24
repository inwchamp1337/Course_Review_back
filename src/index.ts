import { app } from './app' // นำเข้าจาก app.ts

const PORT = process.env.PORT || 5000

app.listen({
  port: Number(PORT),
  hostname: "0.0.0.0" // ✅ สำคัญ! เพื่อให้ Docker เข้าถึงได้
})

console.log(`🦊 Server is running on port ${PORT}`)
