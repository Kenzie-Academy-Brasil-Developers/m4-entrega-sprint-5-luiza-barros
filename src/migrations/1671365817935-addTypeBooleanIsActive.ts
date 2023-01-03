import { MigrationInterface, QueryRunner } from "typeorm";

export class addTypeBooleanIsActive1671365817935 implements MigrationInterface {
    name = 'addTypeBooleanIsActive1671365817935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" DROP DEFAULT`);
    }

}
