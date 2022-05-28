import { IsUUID } from 'class-validator'

export default class UUID {
  @IsUUID(4, { each: true, message: 'id format is incorrect' })
  id: string
}
