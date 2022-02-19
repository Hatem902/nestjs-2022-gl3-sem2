import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ObservableModule } from './observable/observable.module';

@Module({
  imports: [TodoModule, ObservableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
