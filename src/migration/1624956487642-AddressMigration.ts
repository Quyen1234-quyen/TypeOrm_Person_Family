import {MigrationInterface, QueryRunner} from "typeorm";

export class AddressMigration1624956487642 implements MigrationInterface {
    name = 'AddressMigration1624956487642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `phone` DROP FOREIGN KEY `FK_6f375f4141afe2e924bd34be5df`");
        await queryRunner.query("ALTER TABLE `phone` CHANGE `personId` `personId` int NULL");
        await queryRunner.query("ALTER TABLE `person` DROP FOREIGN KEY `FK_0c1da4a2636be3b0512fa1ceaa8`");
        await queryRunner.query("ALTER TABLE `person` CHANGE `familyId` `familyId` int NULL");
        await queryRunner.query("ALTER TABLE `address` DROP FOREIGN KEY `FK_e3d0b5ba0387be88105ad7683bb`");
        await queryRunner.query("ALTER TABLE `address` CHANGE `personId` `personId` int NULL");
        await queryRunner.query("ALTER TABLE `phone` ADD CONSTRAINT `FK_6f375f4141afe2e924bd34be5df` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `person` ADD CONSTRAINT `FK_0c1da4a2636be3b0512fa1ceaa8` FOREIGN KEY (`familyId`) REFERENCES `family`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `address` ADD CONSTRAINT `FK_e3d0b5ba0387be88105ad7683bb` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `address` DROP FOREIGN KEY `FK_e3d0b5ba0387be88105ad7683bb`");
        await queryRunner.query("ALTER TABLE `person` DROP FOREIGN KEY `FK_0c1da4a2636be3b0512fa1ceaa8`");
        await queryRunner.query("ALTER TABLE `phone` DROP FOREIGN KEY `FK_6f375f4141afe2e924bd34be5df`");
        await queryRunner.query("ALTER TABLE `address` CHANGE `personId` `personId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `address` ADD CONSTRAINT `FK_e3d0b5ba0387be88105ad7683bb` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `person` CHANGE `familyId` `familyId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `person` ADD CONSTRAINT `FK_0c1da4a2636be3b0512fa1ceaa8` FOREIGN KEY (`familyId`) REFERENCES `family`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `phone` CHANGE `personId` `personId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `phone` ADD CONSTRAINT `FK_6f375f4141afe2e924bd34be5df` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
