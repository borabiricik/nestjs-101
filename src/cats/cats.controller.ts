import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  /**
   *
   */
  constructor(private catsService: CatsService) {}
  @Get()
  async findAll(): Promise<string> {
    return 'This action return all cats';
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<string> {
    return 'This action is returning one cat with id: ' + id;
  }
  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    console.log(createCatDto);
    return 'This action adds a new cat';
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates #${id} cat`;
  }
  @Delete(':id')
  async delete(): Promise<string> {
    return 'This action removes a cat';
  }
}
