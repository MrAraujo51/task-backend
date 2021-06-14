import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('tasks', ['id'], { unique: true })
@Entity('tasks', { schema: 'public' })
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('character varying', { name: 'title', length: 500 })
  title: string;

  @Column('text', { name: 'description' })
  description: string;

  @Column('character varying', { name: 'status', length: 50 })
  status: string;

  @Column('timestamp without time zone', {
    name: 'creation_date',
    select: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationDate: Date;

  @Column('timestamp without time zone', {
    name: 'modification_date',
    select: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  modificationDate: Date;
}
