export const getToken = () => {
  const token = process.env['TOKEN']

  if (!token) {
    throw new Error(`Required environment variable TOKEN not found.`)
  }

  return token
}

export const getApplicationId = () => {
  const applicationId = process.env['APPLICATION_ID']

  if (!applicationId) {
    throw new Error(`Required environment variable APPLICATION_ID not found.`)
  }

  return applicationId
}

export const getGuildId = () => {
  const guildId = process.env['GUILD_ID']

  if (!guildId) {
    throw new Error(`Required environment variable GUILD_ID not found.`)
  }

  return guildId
}
