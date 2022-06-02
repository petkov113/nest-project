import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import * as bcrypt from 'bcrypt'
import { UUID } from './decorators'
import { CreateUserDto, UpdateUserDto } from './dto'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find()
  }

  async getUser(id: UUID) {
    const user = await this.userRepository.findOne(id)
    if (!user) {
      throw new BadRequestException('Invalid user')
    }
    return user
  }

  async createUser({ email, password }: CreateUserDto) {
    const exists = Boolean(await this.userRepository.findOne({ email }))
    if (exists) {
      throw new BadRequestException('Account with this email already exists.')
    } else {
      try {
        const hashedPass = await bcrypt.hash(password, 10)
        await this.userRepository.insert({ email, password: hashedPass })
        const user = await this.userRepository.findOne({ email })
        return user.id
      } catch (error) {
        throw new BadRequestException(error)
      }
    }
  }

  async updateUser(id: UUID, partialUser: UpdateUserDto) {
    const { email } = partialUser

    const userExists = Boolean(await this.userRepository.findOne(id))
    if (!userExists) {
      throw new BadRequestException("User doesn't exist")
    }

    const emailExists =
      email && Boolean(await this.userRepository.findOne({ email }))
    if (emailExists) {
      throw new BadRequestException('This email is already registered')
    }

    this.userRepository.update(id, partialUser)
  }
}
