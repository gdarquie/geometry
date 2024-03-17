import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Point, Polygon } from 'typeorm';

@Entity()
export class Continent {
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
  localisation: Polygon
}
