import {MigrationInterface, QueryRunner} from "typeorm";

export class PersonMigration1624503806537 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Family" RENAME COLUMN "desc" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Family" RENAME COLUMN "name" TO "desc"`)
    }

}
