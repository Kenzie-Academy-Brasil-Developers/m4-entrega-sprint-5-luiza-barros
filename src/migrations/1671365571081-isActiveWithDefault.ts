import { MigrationInterface, QueryRunner } from "typeorm";

export class isActiveWithDefault1671365571081 implements MigrationInterface {
    name = 'isActiveWithDefault1671365571081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" DROP DEFAULT`);
    }

}
