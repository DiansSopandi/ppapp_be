import { Injectable } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type GrafikDocument = Grafik & Document;

@Injectable()
@Schema({ timestamps: false, versionKey: false })
export class Grafik {
  @Prop({
    type: Number,
  })
  dashboardId: number;

  @Prop({
    type: [String],
    default: [],
  })
  level_wilayah?: string[];

  @Prop({
    type: Boolean,
    default: false,
  })
  show: boolean;

  @Prop({
    type: String,
    default: null,
  })
  label?: string;

  @Prop({
    type: String,
    default: null,
  })
  deskripsi?: string;

  @Prop({
    type: String,
    default: null,
  })
  model_chart?: string;

  @Prop({
    type: Number,
  })
  row: number;

  @Prop({
    type: Number,
  })
  column: number;

  @Prop({
    type: Number,
  })
  column_size: number;

  @Prop({
    type: [String],
    default: [],
  })
  variabel?: string[];
}

export const GrafikSchema = SchemaFactory.createForClass(Grafik);
