import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator'

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  @IsEmail({ message: 'email format is incorrect' })
  readonly email?: string

  @IsOptional()
  @Length(6, 20, { message: 'password format is incorrect' })
  readonly password: string
}
