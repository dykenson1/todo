import { Module } from '@nestjs/common';
import { TodoServiceModule } from './todo-service/todo-service.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/db.config';

@Module({
  imports: [TodoServiceModule, 
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),],
})
export class AppModule {}
