FROM oven/bun

WORKDIR /app

COPY package.json .
COPY package-lock.json ./

# ติดตั้ง dependencies ทั้งหมด (Bun จะติดตั้ง devDependencies โดยอัตโนมัติ)
RUN bun install

COPY . .

# สร้าง Prisma Client ด้วย Bun
RUN bunx prisma generate

# คัดลอก entrypoint และตั้งสิทธิ์
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

CMD ["/app/entrypoint.sh"]