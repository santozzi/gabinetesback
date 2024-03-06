import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('todo')
export class TodoController {
    @Get()
    getTodos(): string {
        return 'Get all todos';
    }
    @Get(':id')
    getTodoById(@Param('id') id:string): string {
        return 'Get todo by id';
    }
    @Post()
    createTodo(): string {
        return 'Create todo';
    }
}
