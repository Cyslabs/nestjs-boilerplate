import { MigrationInterface, QueryRunner } from 'typeorm';

export class CategoryFields1740414878664 implements MigrationInterface {
  name = 'CategoryFields1740414878664';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "category" ADD "firstName" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "firstName"`);
  }
}
