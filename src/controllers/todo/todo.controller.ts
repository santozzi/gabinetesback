import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TODO } from 'src/models/LocalDB/todo.model';
import { TodoService } from 'src/services/todo/todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todo:TodoService){}
    @Get("/")
    getTodos() {
        return this.todo.getTodos();
    }
    @Get(':id')
    getTodoById(@Param('id') id:number) {
        console.log(id);
        
        return this.todo.getTodoById(id);
    }
    @Post()
    createTodo(@Body() payload: TODO): TODO {
        
        return this.todo.createTodo(payload);
    }
    @Put(':id')
    updateTodoById(@Param('id') id:number, @Body() payload: TODO): TODO {
        return this.todo.updateTodoById(id,payload);
    }

}
