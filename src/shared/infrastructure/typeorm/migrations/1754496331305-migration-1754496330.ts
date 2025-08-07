import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration17544963301754496331305 implements MigrationInterface {
    name = 'Migration17544963301754496331305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "state" DROP CONSTRAINT "FK_7a2980776085de5be685c7273d7"`);
        await queryRunner.query(`ALTER TABLE "land" DROP CONSTRAINT "FK_0852712c0367665f34db21d7740"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP CONSTRAINT "FK_732bc276b32806b65efc8021b27"`);
        await queryRunner.query(`ALTER TABLE "state" DROP CONSTRAINT "REL_7a2980776085de5be685c7273d"`);
        await queryRunner.query(`ALTER TABLE "state" DROP COLUMN "land_id"`);
        await queryRunner.query(`ALTER TABLE "land" DROP CONSTRAINT "REL_0852712c0367665f34db21d774"`);
        await queryRunner.query(`ALTER TABLE "land" DROP COLUMN "quote_id"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP CONSTRAINT "REL_732bc276b32806b65efc8021b2"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "quote_id"`);
        await queryRunner.query(`ALTER TABLE "land" DROP CONSTRAINT "FK_92ea9e588785450d0b61cdc135a"`);
        await queryRunner.query(`ALTER TABLE "land" DROP CONSTRAINT "REL_92ea9e588785450d0b61cdc135"`);
        await queryRunner.query(`ALTER TABLE "land" ADD CONSTRAINT "FK_92ea9e588785450d0b61cdc135a" FOREIGN KEY ("state_id") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "land" DROP CONSTRAINT "FK_92ea9e588785450d0b61cdc135a"`);
        await queryRunner.query(`ALTER TABLE "land" ADD CONSTRAINT "REL_92ea9e588785450d0b61cdc135" UNIQUE ("state_id")`);
        await queryRunner.query(`ALTER TABLE "land" ADD CONSTRAINT "FK_92ea9e588785450d0b61cdc135a" FOREIGN KEY ("state_id") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "quote_id" uuid`);
        await queryRunner.query(`ALTER TABLE "customer" ADD CONSTRAINT "REL_732bc276b32806b65efc8021b2" UNIQUE ("quote_id")`);
        await queryRunner.query(`ALTER TABLE "land" ADD "quote_id" uuid`);
        await queryRunner.query(`ALTER TABLE "land" ADD CONSTRAINT "REL_0852712c0367665f34db21d774" UNIQUE ("quote_id")`);
        await queryRunner.query(`ALTER TABLE "state" ADD "land_id" uuid`);
        await queryRunner.query(`ALTER TABLE "state" ADD CONSTRAINT "REL_7a2980776085de5be685c7273d" UNIQUE ("land_id")`);
        await queryRunner.query(`ALTER TABLE "customer" ADD CONSTRAINT "FK_732bc276b32806b65efc8021b27" FOREIGN KEY ("quote_id") REFERENCES "quote"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "land" ADD CONSTRAINT "FK_0852712c0367665f34db21d7740" FOREIGN KEY ("quote_id") REFERENCES "quote"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "state" ADD CONSTRAINT "FK_7a2980776085de5be685c7273d7" FOREIGN KEY ("land_id") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
