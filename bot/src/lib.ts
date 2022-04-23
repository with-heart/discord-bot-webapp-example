import type {ReactionRole, ReactionRoleOption} from 'db'
import {db} from 'db'
import type {Client, Snowflake, TextChannel} from 'discord.js'

/**
 * Search the database for `ReactionRoles` configurations that are missing a
 * Discord message and create them.
 */
export async function createMissingReactionRolesMessages(client: Client) {
  const missingReactionRoles = await db.reactionRole.findMany({
    where: {
      messageSnowflake: null,
    },
    include: {
      options: true,
    },
  })

  if (missingReactionRoles.length === 0) return

  console.log(
    `Creating ${missingReactionRoles.length} missing reaction roles messages`,
  )

  await Promise.all(
    missingReactionRoles.map(async (reactionRole) =>
      createReactionRoleMessage(client, reactionRole),
    ),
  )
}

/**
 * Create a Discord message for a `ReactionRole` configuration.
 */
export async function createReactionRoleMessage(
  client: Client,
  reactionRole: ReactionRole & {options: ReactionRoleOption[]},
) {
  const channel = client.channels.cache.get(
    reactionRole.channelSnowflake,
  ) as TextChannel

  console.log(
    `Creating message for reaction role ${reactionRole.id} in channel ${channel.id}`,
  )

  const message = await channel.send(reactionRole.text)

  await db.reactionRole.update({
    where: {
      id: reactionRole.id,
    },
    data: {
      messageSnowflake: message.id,
    },
  })

  await Promise.all(
    reactionRole.options.map(async (option) => {
      await message.react(option.emoji)
    }),
  )

  console.log(
    `Added ${reactionRole.options.length} reactions to message ${message.id}`,
  )
}

/**
 * Deletes the `ReactionRole` configuration associated with a message.
 */
export const deleteMessageReactionRole = async (
  messageSnowflake: Snowflake,
) => {
  await db.reactionRole.delete({
    where: {
      messageSnowflake,
    },
  })

  console.log(`Deleted reaction role for message ${messageSnowflake}`)
}
