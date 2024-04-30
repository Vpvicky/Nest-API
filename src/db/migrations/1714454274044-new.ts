import { MigrationInterface, QueryRunner } from 'typeorm';

export class New1714454274044 implements MigrationInterface {
  name = 'New1714454274044';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "User" ADD "phoneNumber" integer NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "phoneNumber"`);
  }
}
