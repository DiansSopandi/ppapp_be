import { Injectable } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ColumnField, ColumnFieldSchema } from './column.schema';

export type RowDetailDocument = RowDetail & Document;

@Injectable()
@Schema({ timestamps: false, versionKey: false })
export class RowDetail {
  @Prop({
    type: String,
    default: null,
  })
  label?: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  highlight: boolean;

  @Prop({
    ref: ColumnField.name,
    type: [ColumnFieldSchema],
    default: [],
  })
  column?: ColumnField[];
}

export const RowDetailSchema = SchemaFactory.createForClass(RowDetail);
