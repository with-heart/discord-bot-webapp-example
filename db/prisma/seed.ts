import {Prisma, PrismaClient} from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config({path: process.cwd() + '/.env'})

const guildId = process.env['GUILD_ID']

if (!guildId) {
  throw new Error('Required environment variable GUILD_ID not found.')
}

const prisma = new PrismaClient()

const guildData: Prisma.GuildCreateInput = {
  snowflake: guildId,
  reactionRoles: {
    create: [
      {
        channel: '710641546139271233',
        text: 'This is a reaction roles message! REACT TO GET YOUR STUFF!',
        options: {
          create: [
            // Role A
            {
              role: '900644799797932032',
              emoji: '😁',
            },
            // Role B
            {
              role: '900644831703990292',
              emoji: '😎',
            },
            // Role C
            {
              role: '900646116134096918',
              emoji: '✈',
            },
          ],
        },
      },
    ],
  },
}

async function main() {
  console.log('Start seeding....')

  const guild = await prisma.guild.create({data: guildData})
  console.log(`Created guild with id: ${guild.id}`)

  console.log('Seeding finished!')
}

main()
  .catch((error) => {
    throw new Error(error as string)
  })
  .finally(() => {
    void prisma.$disconnect()
  })
