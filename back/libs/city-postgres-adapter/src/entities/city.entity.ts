import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Point } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column("geometry")
  localisation: Point
}
