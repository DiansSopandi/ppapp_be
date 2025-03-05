import { Injectable } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { RowField, RowFieldSchema } from './row.schema';
import { Grafik, GrafikSchema } from './grafik.schema';
import { CreateRowDto } from '../dto/create-row.dto';

export type DataJsonDocument = DataJson & Document;

@Injectable()
@Schema({ timestamps: true, versionKey: false })
export class DataJson {
  _id?: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: String,
    default: null,
  })
  label?: string;

  @Prop({
    type: [String],
    default: [],
  })
  role?: string[];

  @Prop({
    type: String,
    default: null,
  })
  description?: string;

  @Prop({
    type: String,
    default: null,
  })
  path_user?: string;

  @Prop({
    // ref: RowField.name,
    type: CreateRowDto,
    default: () => ({}),
  })
  grid?: CreateRowDto;

  @Prop({
    type: [String],
    default: [],
  })
  variabel?: string[];

  @Prop({
    type: Boolean,
    default: false,
  })
  show: boolean;

  @Prop({
    type: String,
    default: null,
  })
  icon?: string;

  @Prop({
    ref: Grafik.name,
    type: [GrafikSchema],
    default: [],
  })
  grafik?: Grafik[];
}

export const DataJsonSchema = SchemaFactory.createForClass(DataJson);
