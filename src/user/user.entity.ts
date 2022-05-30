import { Exclude } from 'class-transformer'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ unique: true })
  email!: string

  @Column()
  @Exclude()
  password!: string

  constructor(partial: Partial<User>) {
    super()
    Object.assign(this, partial)
  }
}
