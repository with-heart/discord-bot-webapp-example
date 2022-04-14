# `discord-bot-webapp-example`

> An example of a Discord bot backed by a webapp

## Introduction

For the longest time, I've wanted to learn how to build complex Discord bots
backed by a webapp. Some of my earliest programming experiences involved
building `mIRC` bots in the early 2000s, and Discord bots have sparked some
childlike wonder deep within me.

Unfortunately, while [`discord.js`](https://github.com/discordjs/discord.js) is
an amazing library with a friendly guide, there don't appear to be a whole lot
of resources out there regarding how to use it to bots that are backed by their
own interactive webapp.

I'm hoping to change that someday, and this is how I plan to start! I'll be
building a Discord bot with a backing webapp and using the experience and
lessons learned from this to create content to guide others in the future.

## General idea

I'd like to use this example to experiment with quite a few things as I'm still
new to Discord bots generally, but to start off, this bot will mimic the
[Reaction Roles feature of Mee6](https://mee6.xyz/tutorials/allow-users-to-self-assign-roles-in-discord-with-the-mee6-bot-reaction-roles).

The webapp will allow privileged users to define reaction roles in the following
manner:

1. Select a channel for the reaction roles message to be posted in.
2. Write the contents of the message.
3. Select a list of emoji+role pairs to attach to the message.

Once submitted, the bot will:

1. Post the message in the selected channel.
2. Add an initial emoji reaction to the message for each reaction role.
3. Monitor for users to add a reaction and give the user the corresponding role.

## Inspiration

The general design and structure of the `bot` package and its code is inspired
in many ways by @MarcusOtter and his
[`discord-needle`](https://github.com/MarcusOtter/discord-needle) bot, which is
written in a style that I like very much and feel at home in :heart:
