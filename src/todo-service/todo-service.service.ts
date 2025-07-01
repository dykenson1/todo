import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoServiceDto } from './dto/create-todo-service.dto';
import { UpdateTodoServiceDto } from './dto/update-todo-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoService } from './entities/todo-service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoServiceService {
  constructor(
    @InjectRepository(TodoService)
    private readonly todoRepository: Repository<TodoService>,
  ) {}

  async create(createTodoServiceDto: CreateTodoServiceDto): Promise<TodoService> {
    const { title, description, isDone } = createTodoServiceDto;
    const todo = this.todoRepository.create({ title, description, isDone });
    return await this.todoRepository.save(todo);
  }

  async findAll(): Promise<TodoService[]> {
    return await this.todoRepository.find();
  }

async findOne(id: string): Promise<TodoService> {
  const todo = await this.todoRepository.findOne({ where: { id } });
  if (!todo) {
    throw new NotFoundException(`Todo with id ${id} not found`);
  }
  return todo;
}


  async update(id: string, updateTodoServiceDto: UpdateTodoServiceDto): Promise<void> {
    await this.todoRepository.update(id, updateTodoServiceDto);
  }

  async remove(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
