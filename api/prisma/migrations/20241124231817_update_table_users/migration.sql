-- AlterTable
ALTER TABLE `Establishment` ADD COLUMN `USER_ID` INTEGER UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `Establishment` ADD CONSTRAINT `Establishment_USER_ID_fkey` FOREIGN KEY (`USER_ID`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
