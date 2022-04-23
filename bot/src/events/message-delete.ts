import {deleteMessageReactionRole} from '../lib'
import type {Event} from '../types'

export const messageDelete: Event<'messageDelete'> = {
  name: 'messageDelete',
  listener: async (message) => {
    await deleteMessageReactionRole(message.id)
  },
}
