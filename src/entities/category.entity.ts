import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Properties } from "./properties.entity"

@Entity("category")
class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ unique: true })
    name: string

    @OneToMany(() => Properties, properties => properties.category)
    properties: Properties[]
}

export { Category }