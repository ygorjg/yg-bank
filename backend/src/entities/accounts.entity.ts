import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("accounts")
export default class Accounts {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: 100 })
  balance: number;
}
