import { Module } from '@nestjs/common';
import { GenerateJsonService } from './generate-json.service';
import { GenerateJsonController } from './generate-json.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DataJson, DataJsonSchema } from './schemas/data-json.schema';
import { Grafik, GrafikSchema } from './schemas/grafik.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DataJson.name, schema: DataJsonSchema },
      { name: Grafik.name, schema: GrafikSchema },
    ]),
  ],
  controllers: [GenerateJsonController],
  providers: [GenerateJsonService],
})
export class GenerateJsonModule {}
