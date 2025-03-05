import { Injectable } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RowDetail, RowDetailSchema } from './row-detail.schema';

@Injectable()
@Schema({ timestamps: false, versionKey: false })
export class RowField {
  @Prop({
    ref: RowDetail.name,
    type: [RowDetailSchema],
    default: [],
  })
  row?: RowDetail[];
}

export const RowFieldSchema = SchemaFactory.createForClass(RowField);
