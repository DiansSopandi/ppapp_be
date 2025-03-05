import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from '@nestjs/common';
import { Patch } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getJson(): string {
    return this.appService.getHello();
  }

  @Post()
  postJson() {
    return true;
  }

  @Patch()
  patchJson() {
    return true;
  }
}
