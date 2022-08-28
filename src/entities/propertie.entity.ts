import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm"
import { Address } from "./address.entity"
import { Categorie } from "./categorie.entity"
import { Schedule } from "./schedule.entity"

@Entity("properties")
export class Propertie {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ default: false })
  sold: boolean

  @Column("decimal", { precision: 12, scale: 2 })
  value: number

  @Column({ type: "integer" })
  size: number

  @CreateDateColumn({ type: "date" })
  createdAt: Date

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date

  @OneToMany(() => Schedule, (schedules) => schedules.properties)
  schedules: Schedule[]

  @ManyToOne(() => Categorie, { eager: true })
  category: Categorie

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address
}
