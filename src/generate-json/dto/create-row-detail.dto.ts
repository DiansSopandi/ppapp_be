import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateColumnDto } from './create-column.dto';
import { ColumnField } from '../schemas/column.schema';

export class CreateRowDetailDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  label?: string;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  highlight?: boolean = false;

  @ApiPropertyOptional({ type: [CreateColumnDto] })
  @IsOptional()
  @IsNotEmpty()
  @IsArray()
  @Type(() => CreateColumnDto)
  column?: [CreateColumnDto];
}
