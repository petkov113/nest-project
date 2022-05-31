import { IsUUID } from 'class-validator'

export default class UUID {
  @IsUUID('all', { message: 'id format is incorrect' })
  id: string
}
