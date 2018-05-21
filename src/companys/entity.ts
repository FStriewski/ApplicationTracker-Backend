import { BaseEntity, ManyToOne, OneToMany, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsString, IsNumber } from "class-validator";
import { Users }  from '../users/entity'

@Entity()
export class Companys extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id?: number

    // @IsString()
    @Column('text')
    name: string

    // @IsString()
    @Column('text', { nullable: true })
    market: string

    // @IsString()
    @Column('text', { nullable: true })
    focus: string

    @IsNumber()
    @Column('integer', {nullable: false})
    score: number

    // @IsString()
    @Column('text', { default: "NL", nullable: true })
    language: string

    // @IsString()
    @Column('text', { nullable: true })
    applied: string

    @Column('text', { nullable: false })
    link: string

    @Column('text', { nullable: true })
    comments: string

    @ManyToOne(_ => Users, user => user.companys, { eager: true })
    user: Users
}