import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Property } from "./property.entity"

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ unique: true, length: 120 })
  name: string

  @OneToMany(() => Property, (Property) => Property.category)
  properties: Property[]
}

export {Category}
