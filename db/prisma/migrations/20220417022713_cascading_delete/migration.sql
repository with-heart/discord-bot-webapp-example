-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ReactionRole" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guildId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "channelSnowflake" TEXT NOT NULL,
    "messageSnowflake" TEXT,
    CONSTRAINT "ReactionRole_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ReactionRole" ("channelSnowflake", "guildId", "id", "messageSnowflake", "text") SELECT "channelSnowflake", "guildId", "id", "messageSnowflake", "text" FROM "ReactionRole";
DROP TABLE "ReactionRole";
ALTER TABLE "new_ReactionRole" RENAME TO "ReactionRole";
CREATE TABLE "new_ReactionRoleOption" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "roleSnowflake" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "reactionRoleId" INTEGER NOT NULL,
    CONSTRAINT "ReactionRoleOption_reactionRoleId_fkey" FOREIGN KEY ("reactionRoleId") REFERENCES "ReactionRole" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ReactionRoleOption" ("emoji", "id", "reactionRoleId", "roleSnowflake") SELECT "emoji", "id", "reactionRoleId", "roleSnowflake" FROM "ReactionRoleOption";
DROP TABLE "ReactionRoleOption";
ALTER TABLE "new_ReactionRoleOption" RENAME TO "ReactionRoleOption";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
