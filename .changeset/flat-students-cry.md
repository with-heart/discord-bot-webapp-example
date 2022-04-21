---
'bot': minor
---

Initialized the `bot` package with a basic `discord.js` client with built-in
event handling.

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

commit: f88f12079c03d75e1c146d0a3a3eb5ca77e05ae1
