import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Propertie } from "./propertie.entity"

@Entity("categories")
export class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ unique: true })
  name: string

  @OneToMany(() => Propertie, (properties) => properties.category)
  properties: Propertie[]
}
