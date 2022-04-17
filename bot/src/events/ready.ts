import {createMissingReactionRolesMessages} from '../lib'
import type {Event} from '../types'

export const ready: Event<'ready'> = {
  name: 'ready',
  once: true,
  listener: async (client) => {
    console.log(`Ready! Logged in as ${client.user.tag}`)

    // create messages for any reaction roles that don't yet have a
    // corresponding Discord message
    await createMissingReactionRolesMessages(client)
  },
}
