import type {SlashCommandBuilder} from '@discordjs/builders'
import {REST} from '@discordjs/rest'
import {Routes} from 'discord-api-types/v9'
import {getApplicationId, getGuildId, getToken} from '../src/environment'

/*

This deploy script pushes our commands to the server defined by `guildId` in
`config.json`. We only need to run this once initially, and then any time we add
a new command.

We'll eventually need to conditionally select which `Route` we're using based on
whether we're in a production environment (`applicationCommands`) or a
development environment (`applicationGuildCommands`, default).

Since we're only worrying about development for awhile, we're defaulting to
`applicationGuildCommands` for use with a test server. This is because
`applicationCommands` can take up to an hour to sync commands across all servers
using the bot, while `applicationGuildCommands` syncs the commands to a single
server immediately.

*/

const token = getToken()
const applicationId = getApplicationId()
const guildId = getGuildId()

const commands: SlashCommandBuilder[] = []

void (async () => {
  // initialize discord rest client using our token
  const rest = new REST({version: '9'}).setToken(token)

  try {
    await rest.put(Routes.applicationGuildCommands(applicationId, guildId), {
      body: commands,
    })
    console.log('Successfully registered application commands.')
  } catch (error) {
    console.error(error)
  }
})()
