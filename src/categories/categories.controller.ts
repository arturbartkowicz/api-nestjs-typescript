import {
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import JwtAuthenticationGuard from 'src/authentication/jwtAuthentication.guard';
import FindOneParams from 'src/utils/findOneParams';

@Controller('categories')
@UseInterceptors(ClassSerializerInterceptor)
export default class CategoriesController {
  constructor() {}

  @Get()
  getAllCategories() {}

  @Get(':id')
  getCategoryById(@Param() { id }: FindOneParams) {}

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createCategory() {}

  @Patch(':id')
  async updateCategory(@Param() { id }: FindOneParams) {}

  @Delete(':id')
  async deleteCategory(@Param() { id }: FindOneParams) {}
}
