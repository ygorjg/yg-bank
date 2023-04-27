import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import Accounts from "./accounts.entity";

@Entity("transactions")
export default class Transactions {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Accounts)
  debitedAccountId: Accounts;

  @ManyToOne(() => Accounts)
  creditedAccountId: Accounts;
}
