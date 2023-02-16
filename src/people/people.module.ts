import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Person, PersonSchema } from './entities/person.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Person.name, schema: PersonSchema }])],
  controllers: [PeopleController],
  providers: [PeopleService]
})
export class PeopleModule {}
