/*
  Warnings:

  - A unique constraint covering the columns `[messageSnowflake]` on the table `ReactionRole` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ReactionRole_messageSnowflake_key" ON "ReactionRole"("messageSnowflake");
