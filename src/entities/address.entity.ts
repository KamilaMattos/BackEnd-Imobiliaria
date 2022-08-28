import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 120 })
  district: string

  @Column({ length: 8 })
  zipCode: string

  @Column({ length: 6, nullable: true })
  number: string

  @Column({ length: 60 })
  city: string

  @Column({ length: 2 })
  state: string
}

export { Address }
