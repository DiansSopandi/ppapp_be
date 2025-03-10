import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import { ApiDocs } from './common/api-docs';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: new Logger(),
  });

  app.use(bodyParser.json({ limit: '50mb' }));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  const port = parseInt(configService.get('APP_PORT'));
  const logger = new Logger('ppapp_be');

  ApiDocs.setup(app);
  await app.listen(port);
  logger.log('Application running on port ' + port);
}

bootstrap();
