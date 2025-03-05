import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateRowDto } from './create-row.dto';
import { RowField } from '../schemas/row.schema';
import { CreateGrafikDto } from './create-grafik.dto';
import { Grafik } from '../schemas/grafik.schema';

export class CreateDatumJsonDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  label?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  role?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  path_user?: string;

  @ApiPropertyOptional({ type: CreateRowDto })
  @IsOptional()
  @IsNotEmpty()
  @Type(() => CreateRowDto)
  grid?: RowField;

  @ApiPropertyOptional({ default: [null] })
  @Type()
  @IsOptional()
  @IsArray()
  variabel?: [];

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  show?: boolean = false;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  icon?: string;

  @ApiPropertyOptional({ type: [CreateGrafikDto] })
  @Type(() => CreateGrafikDto)
  @IsOptional()
  @IsArray()
  grafik?: [Grafik];
}
