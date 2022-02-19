import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AddTodoDto } from './dto/addTodo.dto';
import { getQueryDto } from './dto/getQuery.dto';

import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos(@Query() QP: getQueryDto): Todo[] {
    return this.todoService.getTodos(QP);
  }

  @Get('/:id')
  getTodoById(@Param('id') id): Todo {
    return this.todoService.getTodoById(id);
  }
  @Post()
  addTodo(@Body() newTodo: AddTodoDto): Todo {
    return this.todoService.addTodo(newTodo);
  }
  @Delete('/:id')
  deleteTodoById(@Param('id') id) {
    return this.todoService.deleteTodoById(id);
  }
  @Put('/v3/:id')
  completeEditTodoById(@Param('id') id, @Body() altTodo: AddTodoDto) {
    return this.todoService.completeEditTodoById(id, altTodo);
  }
  @Put('/v2/:id')
  partialEditTodoById2(@Param('id') id, @Body() altTodo: Partial<AddTodoDto>) {
    return this.todoService.partialEditTodoById2(id, altTodo);
  }
  @Put(':id')
  partialEditTodoById1(@Param('id') id, @Body() altTodo: Partial<AddTodoDto>) {
    return this.todoService.partialEditTodoById1(id, altTodo);
  }
}

/* @Post()
  addTodo(@Body() newTodo: Pick<todo, 'title' | 'description'>) {
    
    const newId = !this.todos.length
      ? 1
      : this.todos[this.todos.length - 1].id + 1;
    this.todos.push({ id: newId, ...newTodo });
    return newTodo;
  } */
/*   @Post()
  addTodo(@Body() newTodo: Pick<Todo, 'title' | 'description'>) {
    let todo = new Todo();
    todo = { ...todo, ...newTodo, id: uuidv4() };
    this.todos.push(todo);
    return todo;
  } */
