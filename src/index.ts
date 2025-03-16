import { app } from './app.ts' // นำเข้าจากการ export โดยตรง

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`🦊 Server is running on port ${PORT}`)
})