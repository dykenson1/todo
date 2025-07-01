import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoServiceService } from './todo-service.service';
import { CreateTodoServiceDto } from './dto/create-todo-service.dto';
import { UpdateTodoServiceDto } from './dto/update-todo-service.dto';

@Controller('todo-service')
export class TodoServiceController {
  constructor(private readonly todoServiceService: TodoServiceService) {}

  @Post()
 async create(@Body() createTodoServiceDto: CreateTodoServiceDto) {
  return "Hey, this is a test response from the create method!";
  // console.log('Received DTO:', createTodoServiceDto);
  // return await this.todoServiceService.create(createTodoServiceDto);
}


  @Get()
  async findAll() {
    // return await this.todoServiceService.findAll();
    return "Hey, this is a test response from the findAll method!";
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.todoServiceService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTodoServiceDto: UpdateTodoServiceDto) {
    return await this.todoServiceService.update(id, updateTodoServiceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.todoServiceService.remove(id);
  }
}
