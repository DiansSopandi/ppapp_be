import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateGrafikDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  dashboardId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  level_wilayah: [];

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  show: boolean = false;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  label: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  deskripsi: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  model_chart: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  row: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  column: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  column_size: number;

  @ApiPropertyOptional({ default: [null] })
  @IsOptional()
  @IsArray()
  variabel: [];
}
