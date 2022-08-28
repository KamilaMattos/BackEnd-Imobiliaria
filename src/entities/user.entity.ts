import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm"
import { Exclude } from "class-transformer"
import { Schedule } from "./schedule.entity"

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 90 })
  name: string

  @Column({ unique: true, length: 70 })
  email: string

  @Column({ length: 160 })
  @Exclude()
  password: string

  @Column()
  isAdm: boolean

  @Column({ default: true })
  isActive: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => Schedule, (schedules) => schedules.user)
  schedules: Schedule[]
}

export { User }
