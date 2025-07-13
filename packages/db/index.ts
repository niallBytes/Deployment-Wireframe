import { PrismaClient } from '@prisma/client';
// New way to import it like this:
// import { PrismaClient } from './generated/prisma';

export const prismaClient = new PrismaClient();