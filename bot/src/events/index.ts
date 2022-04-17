import {guildCreate} from './guild-create'
import {guildDelete} from './guild-delete'
import {interactionCreate} from './interaction-create'
import {ready} from './ready'

export const events = [ready, interactionCreate, guildCreate, guildDelete]
