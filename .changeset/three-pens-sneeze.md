---
'bot': minor
---

Added event handlers for guild create/delete events:

- the bot automatically creates an entry in the database for each server it's
  invited to
- when the bot is removed from a server, it will automatically remove that
  guild's entry from the database

commit: 764f5e8cec1b783f6e16979dde3258e9e8ab86ed
