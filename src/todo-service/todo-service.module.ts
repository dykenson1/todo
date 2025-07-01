import { Module } from '@nestjs/common';
import { TodoServiceService } from './todo-service.service';
import { TodoServiceController } from './todo-service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './entities/todo-service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoService]),],
  controllers: [TodoServiceController],
  providers: [TodoServiceService],
})
export class TodoServiceModule {}
