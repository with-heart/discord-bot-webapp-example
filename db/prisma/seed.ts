/* eslint-disable @typescript-eslint/require-await */
import {Prisma, PrismaClient} from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config({path: process.cwd() + '/.env'})

const guildId = process.env['GUILD_ID']

if (!guildId) {
  throw new Error('Required environment variable GUILD_ID not found.')
}

const prisma = new PrismaClient()

/*

You can use this file to insert data into your local Prisma db. It's run
automatically after you initialize or reset the db.

To seed your db, you'll need a few things:

- `GUILD_ID` defined in your `.env` file
- The ids of any channels, messages, and roles you want to reference

The following example stores reaction roles for a specific guild channel in the
database, with three role options:

- role 1: 😁
- role 2: 😎
- role 3: ✈

When the bot starts, it will automatically create a message with the text "REACT
TO GET YOUR ROLES!" and react to it with the three emoji listed above. Reacting
with one of the emojis will assign the corresponding role to the user.

Note that you'll need to replace `CHANNEL_ID`, `ROLE_A_ID`, `ROLE_B_ID`, and
`ROLE_C_ID` with actual ids and uncomment the `prisma.guild.create` line in
`main` for this to work.

*/

const guildData: Prisma.GuildCreateInput = {
  guildSnowflake: guildId,
  reactionRoles: {
    create: [
      {
        channelSnowflake: 'CHANNEL_ID',
        text: 'REACT TO GET YOUR ROLES!',
        options: {
          create: [
            // Role A
            {
              roleSnowflake: 'ROLE_A_ID',
              emoji: '😁',
            },
            // Role B
            {
              roleSnowflake: 'ROLE_B_ID',
              emoji: '😎',
            },
            // Role C
            {
              roleSnowflake: 'ROLE_C_ID',
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

  // Uncomment these lines for seeding to work with the example:
  // const guild = await prisma.guild.create({data: guildData})
  // console.log(`Created guild with id: ${guild.id}`)

  console.log('Seeding finished!')
}

main()
  .catch((error) => {
    throw new Error(error as string)
  })
  .finally(() => {
    void prisma.$disconnect()
  })
