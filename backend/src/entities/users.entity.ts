import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import Accounts from "./accounts.entity";
import Transactions from "./transactions.entity";

@Entity("users")
export default class Users {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 50, unique: true })
  username: string;

  @Column({ length: 150 })
  @Exclude()
  password: string;

  @OneToOne(() => Accounts, { eager: true })
  @JoinColumn()
  accountId: Accounts;
}
