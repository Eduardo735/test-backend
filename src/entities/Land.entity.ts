import { Exclude } from 'class-transformer';
// import { ReportContent } from './ReportContent.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('land')
export class Land {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  user_id: string;

  // @ManyToOne(() => User, (user) => user.id, {
  // cascade: true,
  // })
  // @JoinColumn({ name: 'user_id' })
  // owner: User;

  // @ManyToMany(() => User, (user) => user, { eager: true, cascade: true })
  // @JoinTable({
  //   name: 'report_user',
  //   joinColumn: {
  //     name: 'report_id',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'user_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // members: User[];

  // @OneToMany(() => ReportCompany, (reportCompanies) => reportCompanies.report, {
  //   cascade: true, nullable: true
  // })
  // report_companies: ReportCompany[];

  // @OneToOne(() => ReportContent, (reportContent) => reportContent.report, {
  //   cascade: true,
  // })
  // @JoinColumn({ name: 'report_content_id' })
  // content: ReportContent;

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
