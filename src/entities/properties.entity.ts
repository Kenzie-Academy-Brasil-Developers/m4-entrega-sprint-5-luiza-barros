import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToOne,
    OneToMany
} from "typeorm"
import { Address } from "./address.entity"
import { Category } from "./category.entity"
import { SchedulesUsersProperties } from "./schedulesUsersProperties.entity"

@Entity("properties")
class Properties {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ default: false })
    sold: boolean

    @Column({ type: "decimal", precision: 12, scale: 2 })
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Address) @JoinColumn()
    address: Address

    @ManyToOne(() => Category, category => category.properties)
    category: Category

    @OneToMany(() => SchedulesUsersProperties, schedulesUsersProperties => schedulesUsersProperties.properties)
    schedulesUsersProperties: SchedulesUsersProperties[]
}

export { Properties }