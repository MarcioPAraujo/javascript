import{

    Entity,
    PrimaryColumn,
    Column,
    DeleteDateColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn

}from 'typeorm'
import {v4 as uuid} from 'uuid'
import {Employee } from './Employee'

@Entity('jail')
class Jail{
    @PrimaryColumn()
        readonly id!:string

    @Column()
        capacity!:number

    @Column()
        jail_number!:string

    @Column()
        security_level!:string

    @Column()
        confort_level!:string

    @ManyToOne(()=>Employee)
    @JoinColumn()
    employee!:Employee

    @CreateDateColumn()  
        created_at!:Date
    @DeleteDateColumn()
        deleted_at!:Date
    @UpdateDateColumn()
        updated_at!:Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export{Jail}