import { MigrationInterface, QueryRunner } from 'typeorm';

export class OrderFields1740416289655 implements MigrationInterface {
  name = 'OrderFields1740416289655';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "order" ADD "price" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "price"`);
  }
}
