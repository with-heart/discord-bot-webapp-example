# bot

## 0.1.0

### Minor Changes

- [`f88f12079c03d75e1c146d0a3a3eb5ca77e05ae1`](https://github.com/with-heart/discord-bot-webapp-example/commit/f88f12079c03d75e1c146d0a3a3eb5ca77e05ae1)
  Thanks [@with-heart](https://github.com/with-heart)! - Initialized the `bot`
  package with a basic `discord.js` client with built-in event handling.

  The client automatically attaches to `Event` listeners exported from
  `src/events`, allowing us to define listeners for various Discord events with
  minimal effort:

  1. Create a new event in a file in `src/events`:

     ```ts
     // src/events/ready.ts
     import type {Event} from '../types'

     export const ready: Event<'ready'> = {
       name: 'ready',
       once: true,
       listener: (client) => {
         console.log(`Ready! Logged in as ${client.user.tag}`)
       },
     }
     ```

  2. Import the event object in `src/events/index.ts` and add it to the exported
     `events` array:

     ```ts
     // src/events/index.ts
     import {ready} from './ready'

     export const events = [ready]
     ```

* [#21](https://github.com/with-heart/discord-bot-webapp-example/pull/21)
  [`c9055b2`](https://github.com/with-heart/discord-bot-webapp-example/commit/c9055b26b2b82b71619ee8207ec332b1bbc9bc8e)
  Thanks [@with-heart](https://github.com/with-heart)! - When the bot opens an
  initial connection, it will now search for reaction roles that don't have a
  corresponding Discord message and create one.

  This means reaction roles created while the bot is offline while still be
  handled when the bot comes back online.

- [#20](https://github.com/with-heart/discord-bot-webapp-example/pull/20)
  [`764f5e8cec1b783f6e16979dde3258e9e8ab86ed`](https://github.com/with-heart/discord-bot-webapp-example/commit/764f5e8cec1b783f6e16979dde3258e9e8ab86ed)
  Thanks [@with-heart](https://github.com/with-heart)! - Added event handlers
  for guild create/delete events:

  - the bot automatically creates an entry in the database for each server it's
    invited to
  - when the bot is removed from a server, it will automatically remove that
    guild's entry from the database

### Patch Changes

- Updated dependencies
  [[`fe0f767`](https://github.com/with-heart/discord-bot-webapp-example/commit/fe0f76799ecf477ff957cf990f73819e4b803fad),
  [`fe0f767`](https://github.com/with-heart/discord-bot-webapp-example/commit/fe0f76799ecf477ff957cf990f73819e4b803fad),
  [`fe0f767`](https://github.com/with-heart/discord-bot-webapp-example/commit/fe0f76799ecf477ff957cf990f73819e4b803fad)]:
  - db@0.1.0
