import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import Types from 'src/types.enum';

export enum Role {
  PROFESSOR = 'professor',
  CURRENT_STUDENTS = 'current students',
  POST_DOCTORAL_RESEARCHERS = 'post doctoral researchers',
  INTERNS = 'interns',
  ALUMNI = 'alumni',
}

export type PersonDocument = HydratedDocument<Person>;

export interface IProperties {
  type: Types;
  data: any;
}

export interface ILinks {
  label: string;
  url: string;
}

@Schema()
export class Person {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    auto: true,
  })
  _id: string;

  @Prop({
    type: MongooseSchema.Types.Date,
    default: Date.now,
  })
  created_at: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({
    type: MongooseSchema.Types.Mixed,
  })
  properties: Record<string, IProperties>;

  @Prop({ enum: Role, required: true })
  role: Role;

  @Prop({ type: MongooseSchema.Types.Array })
  socials: ILinks[];
}

export const PersonSchema = SchemaFactory.createForClass(Person);
