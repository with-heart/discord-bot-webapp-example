export const getToken = () => {
  const token = process.env['TOKEN']

  if (!token) {
    console.error(`Required environment variable TOKEN not found.`)
    process.exit(1)
  }

  return token
}

export const getApplicationId = () => {
  const applicationId = process.env['APPLICATION_ID']

  if (!applicationId) {
    console.error(`Required environment variable APPLICATION_ID not found.`)
    process.exit(1)
  }

  return applicationId
}

export const getGuildId = () => {
  const guildId = process.env['GUILD_ID']

  if (!guildId) {
    console.error(`Required environment variable GUILD_ID not found.`)
    process.exit(1)
  }

  return guildId
}
