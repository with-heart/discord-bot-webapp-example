import {guildCreate} from './guild-create'
import {guildDelete} from './guild-delete'
import {interactionCreate} from './interaction-create'
import {messageDelete} from './message-delete'
import {ready} from './ready'

export const events = [
  ready,
  interactionCreate,
  guildCreate,
  guildDelete,
  messageDelete,
]
