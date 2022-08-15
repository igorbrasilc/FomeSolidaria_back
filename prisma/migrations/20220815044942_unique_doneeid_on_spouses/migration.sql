/*
  Warnings:

  - A unique constraint covering the columns `[doneeId]` on the table `spouses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "spouses_doneeId_key" ON "spouses"("doneeId");
