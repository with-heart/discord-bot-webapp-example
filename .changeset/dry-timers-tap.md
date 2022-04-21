---
'db': minor
---

Created the `db` package. This packages serves as a gateway to our Prisma
database, allowing other packages to easily manipulate the database contents
without needing to initialize a Prisma client or database.

The Prisma database has three models:

- `Guild`: model for a Discord server (`db.guild`)
- `ReactionRole`: model for reaction roles configuration (`db.reactionRole`)
- `ReactionRoleOption`: model for the options of each reaction roles
  configuration (`db.reactionRoleOption`)

To access them, import the `db` object from the `db` package:

```ts
import {db} from 'db'

await db.guild.findFirst({where: {id: 1}})

await db.reactionRole.findFirst({where: {guildId: 1}})

await db.reactionRoleOption.findFirst({where: {reactionRoleId: 1}})
```

See the [Prisma documentation](https://www.prisma.io/docs) for more information.

commit: 2e4f1a18b339650274653390c5146de4b83ec39f
