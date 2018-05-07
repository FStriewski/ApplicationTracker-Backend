import { BaseEntity, ManyToOne, OneToMany, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsString, IsNumber } from "class-validator";
import { Users }  from '../users/entity'

@Entity()
export class Companys extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Column('text')
    name: string

    @IsString()
    @Column('text')
    market: string

    @IsString()
    @Column('text')
    focus: string

    @IsNumber()
    @Column('integer', {nullable: true})
    score: number

    @IsString()
    @Column('text', { nullable: true })
    openpos: string

    @IsString()
    @Column('text', { nullable: true })
    applied: string

    @Column('text', { nullable: true })
    link: string

    @ManyToOne(_ => Users, user => user.companys, { eager: true })
    user: Users
}