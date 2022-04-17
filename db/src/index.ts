import {PrismaClient} from '@prisma/client'

export type {Guild, ReactionRole, ReactionRoleOption} from '@prisma/client'

export const db = new PrismaClient()
