import { Module } from '@nestjs/common';
import { ObservableController } from './observable.controller';

@Module({
  controllers: [ObservableController]
})
export class ObservableModule {}
