import { IsEmail, Length } from 'class-validator'

export class CreateUserDto {
  @IsEmail({ message: 'email format is incorrect' })
  readonly email: string

  @Length(6, 20, { message: 'password format is incorrect' })
  readonly password: string
}
