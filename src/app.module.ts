import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'), PeopleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
