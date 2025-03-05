import { PartialType } from '@nestjs/swagger';
import { CreateGenerateJsonDto } from './create-generate-json.dto';

export class UpdateGenerateJsonDto extends PartialType(CreateGenerateJsonDto) {}
