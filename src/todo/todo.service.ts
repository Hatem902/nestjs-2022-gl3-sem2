import { Injectable, NotFoundException } from '@nestjs/common';
import { AddTodoDto } from './dto/addTodo.dto';
import { getQueryDto } from './dto/getQuery.dto';
import { Todo } from './entities/todo.entity';
@Injectable()
export class TodoService {
  todos: Todo[] = [];
  getTodos(QP: getQueryDto): Todo[] {
    console.log(QP);
    return this.todos;
  }
  getTodoById(id: string): Todo {
    const todo = this.todos.find((todo) => todo.id === +id);
    if (todo) return todo;
    else throw new NotFoundException(`todo with id=${id} not found in todos`);
  }
  addTodo(newTodo: AddTodoDto): Todo {
    let todo = new Todo();
    todo = {
      ...todo,
      ...newTodo,
      id: !this.todos.length ? 1 : this.todos[this.todos.length - 1].id + 1,
    };
    this.todos.push(todo);
    return todo;
  }
  deleteTodoById(id: string) {
    const index = this.todos.findIndex((todo) => todo.id === +id);
    if (index >= 0) {
      this.todos.splice(index, 1);
      return {
        message: `todo with id=${id} has been successfully deleted`,
        count: '1',
      };
    } else throw new NotFoundException(`todo with id=${id} not found in todos`);
  }
  completeEditTodoById(id: string, altTodo: AddTodoDto) {
    const index = this.todos.findIndex((todo) => todo.id === +id);
    if (index >= 0) {
      this.todos.splice(index, 1, { ...this.todos[index], ...altTodo });
      console.log(JSON.stringify(altTodo));
      return {
        message: `todo with id=${id} has been successfully changed to ${JSON.stringify(
          altTodo,
        )}`,
        count: '1',
      };
    } else throw new NotFoundException(`todo with id=${id} not found in todos`);
  }
  partialEditTodoById2(id: string, altTodo: Partial<AddTodoDto>) {
    const index = this.todos.findIndex((todo) => todo.id === +id);
    if (index >= 0) {
      this.todos.splice(index, 1, { ...this.todos[index], ...altTodo });
      return {
        message: `todo with id=${id} has been successfully changed `,
        changements: altTodo,
        count: '1',
      };
    } else throw new NotFoundException(`todo with id=${id} not found in todos`);
  }
  partialEditTodoById1(id: string, altTodo: Partial<AddTodoDto>) {
    let todo = this.getTodoById(id);
    if (altTodo.title) todo.title = altTodo.title;
    if (altTodo.description) todo.description = altTodo.description;
    return {
      message: `todo with id=${id} has been successfully changed `,
      changements: altTodo,
      count: '1',
    };
  }
}
