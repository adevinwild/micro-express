import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDummy1695025363170 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "dummy" (
                "id" character varying NOT NULL,
                CONSTRAINT "PK_dummy" PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "dummy";
        `);
    }
}
