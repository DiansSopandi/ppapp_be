import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenerateJsonService } from './generate-json.service';
import { UpdateGenerateJsonDto } from './dto/update-generate-json.dto';
import { CreateDatumJsonDto } from './dto/create-datum-json.dto';

@Controller('generate-json')
export class GenerateJsonController {
  constructor(private readonly generateJsonService: GenerateJsonService) {}

  @Post()
  async create(@Body() createGenerateJsonDto: CreateDatumJsonDto) {
    return await this.generateJsonService.create(createGenerateJsonDto);
  }

  @Get()
  async findAll() {
    return await this.generateJsonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generateJsonService.findOne(id);
  }

  /**
   * 
   * @param id 
   * @param updateGenerateJsonDto 
   * @returns 
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGenerateJsonDto: UpdateGenerateJsonDto,
  ) {
    return this.generateJsonService.update(+id, updateGenerateJsonDto);
  }
   */

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.generateJsonService.remove(id);
  }
}
