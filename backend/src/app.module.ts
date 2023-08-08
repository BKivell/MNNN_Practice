import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest-backend'), BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
