import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProductFields1741080796224 implements MigrationInterface {
  name = 'ProductFields1741080796224';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD "price" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "name"`);
  }
}
