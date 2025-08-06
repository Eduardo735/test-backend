import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration17544531621754453162492 implements MigrationInterface {
    name = 'Migration17544531621754453162492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_142ed0e82b45cb7ca6398a11d15"`);
        await queryRunner.query(`CREATE TABLE "customer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "user_id" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "quote_id" uuid, CONSTRAINT "REL_732bc276b32806b65efc8021b2" UNIQUE ("quote_id"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "quote" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "user_id" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "land_id" uuid, "customer_id" uuid, CONSTRAINT "REL_3fac5811d24c743988c465771f" UNIQUE ("land_id"), CONSTRAINT "REL_ea046f9554774e1ccce0da808e" UNIQUE ("customer_id"), CONSTRAINT "PK_b772d4cb09e587c8c72a78d2439" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "land" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "state_id" uuid, "quote_id" uuid, CONSTRAINT "REL_92ea9e588785450d0b61cdc135" UNIQUE ("state_id"), CONSTRAINT "REL_0852712c0367665f34db21d774" UNIQUE ("quote_id"), CONSTRAINT "PK_a6b43171b11dc6bab4a449e7b79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "state" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "land_id" uuid, CONSTRAINT "REL_7a2980776085de5be685c7273d" UNIQUE ("land_id"), CONSTRAINT "PK_549ffd046ebab1336c3a8030a12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "customer" ADD CONSTRAINT "FK_732bc276b32806b65efc8021b27" FOREIGN KEY ("quote_id") REFERENCES "quote"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "quote" ADD CONSTRAINT "FK_3fac5811d24c743988c465771f5" FOREIGN KEY ("land_id") REFERENCES "land"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "quote" ADD CONSTRAINT "FK_ea046f9554774e1ccce0da808e6" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "land" ADD CONSTRAINT "FK_92ea9e588785450d0b61cdc135a" FOREIGN KEY ("state_id") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "land" ADD CONSTRAINT "FK_0852712c0367665f34db21d7740" FOREIGN KEY ("quote_id") REFERENCES "quote"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "state" ADD CONSTRAINT "FK_7a2980776085de5be685c7273d7" FOREIGN KEY ("land_id") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "state" DROP CONSTRAINT "FK_7a2980776085de5be685c7273d7"`);
        await queryRunner.query(`ALTER TABLE "land" DROP CONSTRAINT "FK_0852712c0367665f34db21d7740"`);
        await queryRunner.query(`ALTER TABLE "land" DROP CONSTRAINT "FK_92ea9e588785450d0b61cdc135a"`);
        await queryRunner.query(`ALTER TABLE "quote" DROP CONSTRAINT "FK_ea046f9554774e1ccce0da808e6"`);
        await queryRunner.query(`ALTER TABLE "quote" DROP CONSTRAINT "FK_3fac5811d24c743988c465771f5"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP CONSTRAINT "FK_732bc276b32806b65efc8021b27"`);
        await queryRunner.query(`DROP TABLE "state"`);
        await queryRunner.query(`DROP TABLE "land"`);
        await queryRunner.query(`DROP TABLE "quote"`);
        await queryRunner.query(`DROP TABLE "customer"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_142ed0e82b45cb7ca6398a11d15" FOREIGN KEY ("firm_id") REFERENCES "firm"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
