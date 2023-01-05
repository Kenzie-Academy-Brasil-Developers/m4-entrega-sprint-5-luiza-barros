import { hashSync } from "bcryptjs"
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    DeleteDateColumn,
    BeforeRemove,
    OneToMany
} from "typeorm"
import { SchedulesUsersProperties } from "./schedulesUsersProperties.entity"

@Entity("users")
class Users {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 })
    name: string

    @Column({ length: 50, unique: true })
    email: string

    @Column({ length: 120 })
    password: string

    @Column()
    isAdm: boolean

    @Column({ default: true })
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10)
    }

    @BeforeRemove()
    isActiveChanged() {
        this.isActive = false
    }

    @OneToMany(() => SchedulesUsersProperties, schedulesUsersProperties => schedulesUsersProperties.users)
    schedules: SchedulesUsersProperties
}

export { Users }