import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka:29092']
      },
      consumer: {
        groupId: 'tracking-consumer'
      }
    }
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
