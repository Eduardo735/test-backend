import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration17544089311754408931764 implements MigrationInterface {
    name = 'Migration17544089311754408931764'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "firm" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" text NOT NULL, "website" character varying NOT NULL, "valid_domain" text array, "is_active" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_b6e197d72a2ef8bd97a7cbc686e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_email" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "email" character varying NOT NULL, "email_type" character varying NOT NULL, "is_primary" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_95c07c16136adcfdcb8221c1fc9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firm_id" uuid, "first_name" character varying, "last_name" character varying, "email" character varying, "job_position" character varying, "id_web_app" character varying, "id_saas_app" character varying, "time_zone" character varying, "mfa" boolean NOT NULL DEFAULT false, "mfa_secret" character varying, "is_active" boolean NOT NULL DEFAULT false, "is_deleted" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "is_active" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_fb2e442d14add3cefbdf33c4561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "report" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "user_id" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "report_content_id" uuid, CONSTRAINT "REL_e66289108c93bc91858c5ee3a3" UNIQUE ("report_content_id"), CONSTRAINT "PK_99e4d0bea58cba73c57f935a546" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "report_content" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "markdown" text NOT NULL DEFAULT '', CONSTRAINT "PK_560db16e1bf666acd4d4a5de887" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "report_company" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "is_primary" boolean NOT NULL DEFAULT false, "deleted_at" TIMESTAMP, "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_2d9e36314aa1e0db286088fef8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_email" ADD CONSTRAINT "FK_5fa41dccc4382ff09a32fbe6500" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_142ed0e82b45cb7ca6398a11d15" FOREIGN KEY ("firm_id") REFERENCES "firm"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "report" ADD CONSTRAINT "FK_e66289108c93bc91858c5ee3a39" FOREIGN KEY ("report_content_id") REFERENCES "report_content"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" DROP CONSTRAINT "FK_e66289108c93bc91858c5ee3a39"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_142ed0e82b45cb7ca6398a11d15"`);
        await queryRunner.query(`ALTER TABLE "user_email" DROP CONSTRAINT "FK_5fa41dccc4382ff09a32fbe6500"`);
        await queryRunner.query(`DROP TABLE "report_company"`);
        await queryRunner.query(`DROP TABLE "report_content"`);
        await queryRunner.query(`DROP TABLE "report"`);
        await queryRunner.query(`DROP TABLE "user_role"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "user_email"`);
        await queryRunner.query(`DROP TABLE "firm"`);
    }

}
