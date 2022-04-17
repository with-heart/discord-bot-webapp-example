import {db} from 'db'
import type {Event} from '../types'

export const guildDelete: Event<'guildDelete'> = {
  name: 'guildDelete',
  listener: async (guild) => {
    console.log(`Left guild ${guild.name} (${guild.id})`)
    await db.guild.delete({
      where: {
        guildSnowflake: guild.id,
      },
    })
  },
}
