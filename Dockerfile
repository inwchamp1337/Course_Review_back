FROM oven/bun:1.2.5

WORKDIR /app

# ติดตั้ง system dependencies ที่จำเป็นสำหรับ Prisma


COPY package.json bun.lockb ./

# แก้ปัญหา zlib error และ cache เสีย
RUN bun install 

# คัดลอกโค้ดทั้งหมด (ควรแยกขั้นตอนไว้หลังติดตั้ง dependencies)
COPY . .

# รัน prisma generate แยกขั้นตอน
RUN bunx prisma generate

CMD ["bun", "src/index.ts"]