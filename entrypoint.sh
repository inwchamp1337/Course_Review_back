#!/bin/sh

# รัน migration และเริ่มแอพ
bunx prisma migrate deploy
exec bun run src/index.ts