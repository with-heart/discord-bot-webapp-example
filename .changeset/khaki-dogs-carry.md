---
'db': minor
---

Enabled cascading deletes for `ReactionRole` and `ReactionRoleOption` models.
This means that when a `Guild` is deleted, any associated `ReactionRole` and
`ReactionRoleOption` entries will be deleted as well.

commit: 68c798f
