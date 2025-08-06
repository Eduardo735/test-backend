import { Exclude } from 'class-transformer';
// import { ReportContent } from './ReportContent.entity';
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
import { State } from './State.entity';

@Entity('land')
export class Land {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @OneToOne(() => State, (state) => state.land, {
    cascade: true,
  })
  @JoinColumn({ name: 'state_id' })
  state: State;

  @OneToOne(() => Quote, (quote) => quote.land)
  @JoinColumn({ name: 'quote_id' })
  quote: Quote;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  @Exclude()
  updated_at: Date;

  @DeleteDateColumn()
  @Exclude()
  deleted_at?: Date;
}
