import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import helmet from 'helmet'
import { AppModule } from './app.module'

async function bootstrap() {
  const isProd = process.env.NODE_ENV === 'production'
  const PORT = process.env.PORT || 4000
  const app = await NestFactory.create(AppModule)

  app.use(helmet())

  if (isProd) {
    const allowedOrigins = []
    app.enableCors({
      origin: (origin, callback) =>
        allowedOrigins.includes(origin)
          ? callback(null, true)
          : callback(
              new Error('Access from the specified Origin is prohibited'),
              false,
            ),
    })
  }

  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: isProd }))

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}
bootstrap()
