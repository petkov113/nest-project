import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import config from '../ormconfig'
import { UserModule } from './user'

@Module({
  controllers: [],
  providers: [],
  imports: [TypeOrmModule.forRoot(config), UserModule],
})
export class AppModule {}
