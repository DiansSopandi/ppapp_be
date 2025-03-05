import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerateJsonModule } from './generate-json/generate-json.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/commons/database/database.module';

const environment = process.env.NODE_ENV;
const configDir =
  process.env.CONFIG_DIR || `${process.cwd.toString()}/config-env`;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${configDir}/${environment}.properties`,
      expandVariables: true,
      isGlobal: true,
    }),
    DatabaseModule,
    GenerateJsonModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
