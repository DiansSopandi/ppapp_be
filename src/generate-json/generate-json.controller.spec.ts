import { Test, TestingModule } from '@nestjs/testing';
import { GenerateJsonController } from './generate-json.controller';
import { GenerateJsonService } from './generate-json.service';

describe('GenerateJsonController', () => {
  let controller: GenerateJsonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateJsonController],
      providers: [GenerateJsonService],
    }).compile();

    controller = module.get<GenerateJsonController>(GenerateJsonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
