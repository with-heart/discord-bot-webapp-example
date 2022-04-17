import {db} from 'db'
import type {Event} from '../types'

export const guildCreate: Event<'guildCreate'> = {
  name: 'guildCreate',
  listener: async (guild) => {
    console.log(`Joined guild ${guild.name} (${guild.id})`)
    await db.guild.create({
      data: {
        guildSnowflake: guild.id,
      },
    })
  },
}
