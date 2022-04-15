-- CreateTable
CREATE TABLE "Guild" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "snowflake" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ReactionRole" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guildId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    CONSTRAINT "ReactionRole_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ReactionRoleOption" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "role" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "reactionRoleId" INTEGER NOT NULL,
    CONSTRAINT "ReactionRoleOption_reactionRoleId_fkey" FOREIGN KEY ("reactionRoleId") REFERENCES "ReactionRole" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
