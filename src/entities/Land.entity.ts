import { Exclude } from 'class-transformer';
// import { ReportContent } from './ReportContent.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column({ type: 'json', nullable: true })
  dataLand: any;

  @OneToOne(() => Quote, (quote) => quote.land)
  quote: Quote;

  @ManyToOne(() => State, (state) => state.land)
  @JoinColumn({ name: 'state_id' })
  state: State;

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
