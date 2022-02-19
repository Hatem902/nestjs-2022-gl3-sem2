import { Todo } from '../entities/todo.entity';
import { PickType } from '@nestjs/swagger';
export class AddTodoDto extends PickType(Todo, [
  'title',
  'description',
] as const) {}
