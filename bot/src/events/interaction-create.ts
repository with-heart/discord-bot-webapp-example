import type {Event} from '../types'

export const interactionCreate: Event<'interactionCreate'> = {
  name: 'interactionCreate',
  listener: (interaction) => {
    if (!interaction.isCommand()) return
  },
}
