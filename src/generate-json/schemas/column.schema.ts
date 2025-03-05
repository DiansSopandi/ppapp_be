import { Injectable } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ColumnFieldDocument = ColumnField & Document;

@Injectable()
@Schema({ timestamps: false, versionKey: false })
export class ColumnField {
  @Prop({
    type: Number,
  })
  lg: number;

  @Prop({
    type: Number,
  })
  md: number;

  @Prop({
    type: Number,
  })
  sm: number;
}

export const ColumnFieldSchema = SchemaFactory.createForClass(ColumnField);
