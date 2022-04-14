import {Client, Intents} from 'discord.js'
import {token} from '../config.json'
import {events} from './events'
import type {EventListener} from './types'

const client = new Client({intents: [Intents.FLAGS.GUILDS]})

// attach our event listeners to the client
for (const event of events) {
  if (event.once) {
    client.once(event.name, event.listener as EventListener<any>)
  } else {
    client.on(event.name, event.listener as EventListener<any>)
  }
}

client.login(token)
