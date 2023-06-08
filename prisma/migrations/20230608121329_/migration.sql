-- CreateTable
CREATE TABLE `Trakcing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `eventDate` DATETIME(3) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `coordinates` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
