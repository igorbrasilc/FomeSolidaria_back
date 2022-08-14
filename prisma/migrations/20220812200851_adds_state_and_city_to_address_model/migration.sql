/*
  Warnings:

  - The `birthdate` column on the `children` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `birthdate` on the `donees` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `birthdate` on the `spouses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "adresses" ADD COLUMN     "city" TEXT NOT NULL DEFAULT 'Itapema',
ADD COLUMN     "state" TEXT NOT NULL DEFAULT 'Santa Catarina';

-- AlterTable
ALTER TABLE "children" DROP COLUMN "birthdate",
ADD COLUMN     "birthdate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "donees" DROP COLUMN "birthdate",
ADD COLUMN     "birthdate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "spouses" DROP COLUMN "birthdate",
ADD COLUMN     "birthdate" TIMESTAMP(3) NOT NULL;
