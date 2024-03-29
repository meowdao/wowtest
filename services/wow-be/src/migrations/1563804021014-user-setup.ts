import {MigrationInterface, QueryRunner} from "typeorm";

export class UserSetup1563804021014 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const currentDateTime = new Date().toISOString();
    const passwordHash = "d95407c19ab4161df88bca23ca1cbce3ec58d582dbd07f648dddccaebab75eb1"; // qwerty

    await queryRunner.query("TRUNCATE TABLE wow.user RESTART IDENTITY CASCADE;");

    await queryRunner.query(`INSERT INTO wow.user (
       email, password, first_name, last_name,
       birthday, gender,
       description, phone,
       status, role, created_at, updated_at
       ) VALUES (
       'trejgun@gmail.com', '${passwordHash}', 'Trej', 'Gun',
       '1985-12-06', 'male',
       'cool guy', '15129554129',
       'active', 'marketer', '${currentDateTime}', '${currentDateTime}'
       );`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("TRUNCATE TABLE wow.user RESTART IDENTITY CASCADE;");
  }
}
