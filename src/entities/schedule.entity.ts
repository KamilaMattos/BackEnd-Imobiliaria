import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm"
import { Propertie } from "./propertie.entity"
import { User } from "./user.entity"

@Entity("schedules_user_propertie")
export class Schedule {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "date" })
  date: Date

  @Column({ type: "time" })
  hour: string

  @ManyToOne(() => User, { eager: true })
  users: User

  @ManyToOne(() => Propertie)
  properties: Propertie
}
