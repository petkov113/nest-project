import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import config from '../ormconfig'

@Module({
  controllers: [],
  providers: [],
  imports: [TypeOrmModule.forRoot(config)],
})
export class AppModule {}
