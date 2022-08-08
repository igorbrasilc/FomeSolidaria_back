-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donees" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "contact" TEXT NOT NULL DEFAULT 'null',
    "occupation" TEXT NOT NULL DEFAULT 'null',
    "rg" TEXT NOT NULL DEFAULT 'null',
    "cpf" TEXT NOT NULL DEFAULT 'null',
    "addressId" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "donees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spouses" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "contact" TEXT NOT NULL DEFAULT 'null',
    "occupation" TEXT NOT NULL DEFAULT 'null',
    "rg" TEXT NOT NULL DEFAULT 'null',
    "cpf" TEXT NOT NULL DEFAULT 'null',
    "doneeId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "spouses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colleagues" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL DEFAULT 'null',
    "occupation" TEXT NOT NULL DEFAULT 'null',
    "rg" TEXT NOT NULL DEFAULT 'null',
    "cpf" TEXT NOT NULL DEFAULT 'null',
    "doneeId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "colleagues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "children" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL DEFAULT 'null',
    "contact" TEXT NOT NULL DEFAULT 'null',
    "doneeId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "children_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" SERIAL NOT NULL,
    "note" TEXT NOT NULL,
    "reminder" TEXT NOT NULL DEFAULT 'null',
    "doneeId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adresses" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "number" TEXT NOT NULL,

    CONSTRAINT "adresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donations" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL DEFAULT 'null',
    "doneeId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "donations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_username_key" ON "admins"("username");

-- AddForeignKey
ALTER TABLE "donees" ADD CONSTRAINT "donees_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "adresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spouses" ADD CONSTRAINT "spouses_doneeId_fkey" FOREIGN KEY ("doneeId") REFERENCES "donees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colleagues" ADD CONSTRAINT "colleagues_doneeId_fkey" FOREIGN KEY ("doneeId") REFERENCES "donees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "children" ADD CONSTRAINT "children_doneeId_fkey" FOREIGN KEY ("doneeId") REFERENCES "donees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_doneeId_fkey" FOREIGN KEY ("doneeId") REFERENCES "donees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donations" ADD CONSTRAINT "donations_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donations" ADD CONSTRAINT "donations_doneeId_fkey" FOREIGN KEY ("doneeId") REFERENCES "donees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
