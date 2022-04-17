---
'bot': minor
---

When the bot opens an initial connection, it will now search for reaction roles
that don't have a corresponding Discord message and create one.

This means reaction roles created while the bot is offline while still be
handled when the bot comes back online.
