import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person, PersonDocument } from './entities/person.entity';

@Injectable()
export class PeopleService {

  constructor(@InjectModel(Person.name) private PersonModel: Model<PersonDocument>) { }
  
  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    console.log(createPersonDto)
    const person = new this.PersonModel(createPersonDto);
    return await person.save()
  }

  async findAll(): Promise<Person[]> {
    return await this.PersonModel.find({})
  }

  async findOne(id: string): Promise<Person> {
    return await this.PersonModel.findOne({id})
  }

  update(id: string, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: string) {
    return `This action removes a #${id} person`;
  }
}
