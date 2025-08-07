import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration17544966211754496621942 implements MigrationInterface {
    name = 'Migration17544966211754496621942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quote" DROP CONSTRAINT "FK_ea046f9554774e1ccce0da808e6"`);
        await queryRunner.query(`ALTER TABLE "quote" DROP CONSTRAINT "REL_ea046f9554774e1ccce0da808e"`);
        await queryRunner.query(`ALTER TABLE "quote" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "quote_id" uuid`);
        await queryRunner.query(`ALTER TABLE "customer" ADD CONSTRAINT "FK_732bc276b32806b65efc8021b27" FOREIGN KEY ("quote_id") REFERENCES "quote"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP CONSTRAINT "FK_732bc276b32806b65efc8021b27"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "quote_id"`);
        await queryRunner.query(`ALTER TABLE "quote" ADD "customer_id" uuid`);
        await queryRunner.query(`ALTER TABLE "quote" ADD CONSTRAINT "REL_ea046f9554774e1ccce0da808e" UNIQUE ("customer_id")`);
        await queryRunner.query(`ALTER TABLE "quote" ADD CONSTRAINT "FK_ea046f9554774e1ccce0da808e6" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
