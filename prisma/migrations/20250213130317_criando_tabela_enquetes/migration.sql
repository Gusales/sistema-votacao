-- CreateTable
CREATE TABLE "enquetes" (
    "id_enquete" TEXT NOT NULL,
    "titulo_enquete" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "enquetes_pkey" PRIMARY KEY ("id_enquete")
);
