import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm"
import { Property } from "./property.entity"
import { User } from "./user.entity"

@Entity("schedules_user_propertie")
class Schedule {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "date" })
  date: string

  @Column({ type: "time" })
  hour: string

  @ManyToOne(() => User, (user) => user.schedules, { eager: true })
  user: User

  @ManyToOne(() => Property, (property) => property.schedules)
  property: Property
}

export { Schedule }
