import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import PostsService from './posts.service';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import JwtAuthenticationGuard from 'src/authentication/jwtAuthentication.guard';
import { ExcludeNullInterceptor } from 'src/utils/excludeNull.interceptor';
 
@Controller('posts')
export default class PostsController {
  constructor(
    private readonly postsService: PostsService
  ) {}
 
  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }
 
  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postsService.getPostById(Number(id));
  }
 
  @Post()
  @UseGuards(JwtAuthenticationGuard)
  @UseInterceptors(ExcludeNullInterceptor)
  async createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }
 
  @Patch(':id')
  async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.updatePost(Number(id), post);
  }
 
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    this.postsService.deletePost(Number(id));
  }
}