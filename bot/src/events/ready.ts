import type {Event} from '../types'

export const ready: Event<'ready'> = {
  name: 'ready',
  once: true,
  listener: (client) => {
    console.log(`Ready! Logged in as ${client.user.tag}`)
  },
}
