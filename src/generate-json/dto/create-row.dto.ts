import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateRowDetailDto } from './create-row-detail.dto';
import { Type } from 'class-transformer';

export class CreateRowDto {
  @ApiPropertyOptional({ type: [CreateRowDetailDto] })
  @IsOptional()
  @IsNotEmpty()
  @IsArray()
  @Type(() => CreateRowDetailDto)
  row?: [CreateRowDetailDto];
}
