---
'db': minor
---

Renamed all model fields intended to store a Discord `Snowflake` (unique,
timestamped id) to make that more obvious:

- `Guild`
  - `snowflake` -> `guildSnowflake`
- `ReactionRole`
  - `channel` -> `channelSnowflake`
  - `message` -> `messageSnowflake`
- `ReactionRoleOption`
  - `role` -> `roleSnowflake`

commit: d0ece173af51234cc82fed83de2d735ce739c86b
