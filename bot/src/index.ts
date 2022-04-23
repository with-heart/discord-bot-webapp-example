import {Client, Intents} from 'discord.js'
import {getToken} from './environment'
import {events} from './events'
import type {Event} from './types'

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

// attach our event listeners to the client
for (const event of events) {
  if (event.once) {
    client.once(event.name, event.listener as Event['listener'])
  } else {
    client.on(event.name, event.listener as Event['listener'])
  }
}

void client.login(getToken())
