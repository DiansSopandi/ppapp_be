import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class CreateColumnDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  lg?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  md?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  sm?: number;
}
