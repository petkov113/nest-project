import { IsEmail, Length } from 'class-validator'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ unique: true })
  @IsEmail({ message: 'email format is incorrect' })
  email!: string

  @Column()
  @Length(6, 20, { message: 'password format is incorrect' })
  password!: string
}
