import {MigrationInterface, QueryRunner} from "typeorm";

export class PersonMigration1624503806537 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Person" RENAME COLUMN "firstName" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Person" RENAME COLUMN "name" TO "firstName"`)
    }

}
