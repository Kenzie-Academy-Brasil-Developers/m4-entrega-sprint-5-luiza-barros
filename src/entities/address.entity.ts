import { 
    Entity,
    PrimaryGeneratedColumn,
    Column
 } from "typeorm"

@Entity("address")
class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    district: string

    @Column()
    zipCode: string

    @Column({ nullable: true, default: 0 })
    number?: string

    @Column()
    city: string

    @Column()
    state: string
}

export { Address }