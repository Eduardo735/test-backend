import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration17545065781754506578751 implements MigrationInterface {
    name = 'Migration17545065781754506578751'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "land" ADD "dataLand" json`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "land" DROP COLUMN "dataLand"`);
    }

}
