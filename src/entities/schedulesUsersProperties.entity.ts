import { 
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm"
import { Properties } from "./properties.entity"
import { Users } from "./users.entity"

@Entity("schedulesUsersProperties")
class SchedulesUsersProperties {
    @PrimaryGeneratedColumn("uuid") 
    id: string

    @Column({ type: "date" })
    date: string

    @Column({ type: "time" }) 
    hour: string

    @ManyToOne(() => Users)
    users: Users

    @ManyToOne(() => Properties)
    properties: Properties
}

export { SchedulesUsersProperties }