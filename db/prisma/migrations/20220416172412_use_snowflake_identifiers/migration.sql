/*
  Warnings:

  - You are about to drop the column `channel` on the `ReactionRole` table. All the data in the column will be lost.
  - You are about to drop the column `snowflake` on the `Guild` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `ReactionRoleOption` table. All the data in the column will be lost.
  - Added the required column `channelSnowflake` to the `ReactionRole` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guildSnowflake` to the `Guild` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleSnowflake` to the `ReactionRoleOption` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ReactionRole" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guildId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "channelSnowflake" TEXT NOT NULL,
    "messageSnowflake" TEXT,
    CONSTRAINT "ReactionRole_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ReactionRole" ("guildId", "id", "text") SELECT "guildId", "id", "text" FROM "ReactionRole";
DROP TABLE "ReactionRole";
ALTER TABLE "new_ReactionRole" RENAME TO "ReactionRole";
CREATE TABLE "new_Guild" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guildSnowflake" TEXT NOT NULL
);
INSERT INTO "new_Guild" ("id") SELECT "id" FROM "Guild";
DROP TABLE "Guild";
ALTER TABLE "new_Guild" RENAME TO "Guild";
CREATE UNIQUE INDEX "Guild_guildSnowflake_key" ON "Guild"("guildSnowflake");
CREATE TABLE "new_ReactionRoleOption" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "roleSnowflake" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "reactionRoleId" INTEGER NOT NULL,
    CONSTRAINT "ReactionRoleOption_reactionRoleId_fkey" FOREIGN KEY ("reactionRoleId") REFERENCES "ReactionRole" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ReactionRoleOption" ("emoji", "id", "reactionRoleId") SELECT "emoji", "id", "reactionRoleId" FROM "ReactionRoleOption";
DROP TABLE "ReactionRoleOption";
ALTER TABLE "new_ReactionRoleOption" RENAME TO "ReactionRoleOption";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
