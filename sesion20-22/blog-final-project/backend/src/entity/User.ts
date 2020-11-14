import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ name: 'lastname', nullable: true })
  lastname: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column({name: 'is_admin', default: false})
  isAdmin: boolean;
}