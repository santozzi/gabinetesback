import { Injectable } from '@nestjs/common';
import {TODO} from './../../models/LocalDB/todo.model';

@Injectable()
export class TodoService {
    private id=3;
    private todos: TODO[] = [
        {
            id: 1,
            title: 'First todo',
            description: 'This is the first todo',
            isCompleted: false
        },
        {
            id: 2,
            title: 'Second todo',
            description: 'This is the second todo',
            isCompleted: false
        },
        {
            id: 3,
            title: 'Third todo',
            description: 'This is the third todo',
            isCompleted: false
        }
    ];

    getTodos(): TODO[] {
        return this.todos;
    }

    getTodoById(id: number): TODO {
        let respuesta = this.todos.find(todo => {
            console.log(typeof todo.id);
            console.log(typeof Number(id));
            
            return todo.id === Number(id);
        });
        console.log(respuesta);
        

        return respuesta;
    }

    createTodo(todo: TODO): TODO {
        this.id++;
        todo.id=this.id;

        this.todos.push(todo);
        return todo;
    }

    updateTodoById(id: number, todo: TODO): TODO {
        const index = this.todos.findIndex(todo => todo.id === id);
        this.todos[index] = todo;
        return todo;
    }

    deleteTodoById(id: number): TODO {
        const index = this.todos.findIndex(todo => todo.id === id);
        const todo = this.todos[index];
        this.todos.splice(index, 1);
        return todo;
    }

}
