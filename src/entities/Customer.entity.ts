import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Quote } from './Quote.entity';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  user_id: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @OneToOne(() => Quote, (quote) => quote.customer)
  @JoinColumn({ name: 'quote_id' })
  quote: Quote;

  @UpdateDateColumn({ nullable: true })
  @Exclude()
  updated_at: Date;

  @DeleteDateColumn()
  @Exclude()
  deleted_at?: Date;
}
