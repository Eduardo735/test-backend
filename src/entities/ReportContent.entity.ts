import { Report } from './Report.entity';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('report_content')
export class ReportContent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    default: '',
  })
  markdown: string;

  @OneToOne(() => Report, (report) => report.content)
  report: Report;
}
