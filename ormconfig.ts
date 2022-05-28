import { ConfigModule } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV}.env`,
})

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrationsRun: false,
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
}

export default config
