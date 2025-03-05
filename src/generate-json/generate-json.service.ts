import { Injectable } from '@nestjs/common';
import { UpdateGenerateJsonDto } from './dto/update-generate-json.dto';
import { CreateDatumJsonDto } from './dto/create-datum-json.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DataJson } from './schemas/data-json.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class GenerateJsonService {
  constructor(
    @InjectModel(DataJson.name)
    private dataJsonModel: Model<DataJson>,
  ) {}

  async create(createGenerateJsonDto: CreateDatumJsonDto) {
    try {
      Object.entries(createGenerateJsonDto).forEach(([key, val]) => {
        // if (key === 'grafik') {
        // }
      });
      return await new this.dataJsonModel(createGenerateJsonDto).save();
    } catch (error) {
      return {
        status: 'failed',
        message: error.stack,
      };
    }
  }

  async findAll() {
    return await this.dataJsonModel.find().sort({ createdAt: -1 });
  }

  async findOne(id: string) {
    return await this.dataJsonModel.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  update(id: number, updateGenerateJsonDto: UpdateGenerateJsonDto) {
    return `This action updates a #${id} generateJson`;
  }

  async remove(id: string) {
    return await this.dataJsonModel
      .findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) })
      .then((res) => {
        return {
          success: true,
          message: 'Document remove succeeded',
          data: res,
        };
      })
      .catch((err) => ({
        success: false,
        message: `Document remove failed ${err.stack}`,
        data: null,
      }));
  }
}
