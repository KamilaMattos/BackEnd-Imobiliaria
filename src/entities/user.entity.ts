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
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column({ default: true })
  isAdm: boolean

  @Column()
  isActive: boolean

  @Column()
  @Exclude()
  password: string

  @CreateDateColumn({ type: "date" })
  createdAt: Date

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date

  @OneToMany(() => Schedule, (schedules) => schedules.users)
  schedules: Schedule[]
}
