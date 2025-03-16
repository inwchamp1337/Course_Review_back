import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testPrisma() {
    try {
        await prisma.$connect();
        console.log('✅ Prisma connected to PostgreSQL');

        const result = await prisma.$queryRaw`SELECT NOW() as current_time`;
        console.log('🕒 Current Time:', result[0].current_time);
    } catch (err) {
        console.error('❌ Prisma connection error:', err);
    } finally {
        await prisma.$disconnect();
    }
}

testPrisma();
