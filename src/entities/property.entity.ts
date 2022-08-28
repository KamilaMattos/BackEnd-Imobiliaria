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
import { Category } from "./category.entity"
import { Schedule } from "./schedule.entity"

@Entity("properties")
class Property {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ default: false })
  sold: boolean

  @Column("decimal", { precision: 12, scale: 2 })
  value: number

  @Column({ type: "integer" })
  size: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address

  @ManyToOne(() => Category)
  category: Category

  @OneToMany(() => Schedule, (schedule) => schedule.property)
  schedules: Schedule[]
}

export { Property }
