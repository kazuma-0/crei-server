import { IsString, IsEnum, IsObject, IsArray } from 'class-validator';
import { ILinks, IProperties, Role } from '../entities/person.entity';

export class CreatePersonDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(Role)
  role: Role;

  @IsObject()
  properties: Record<string, IProperties>;

  @IsArray()
  socials: ILinks[];
}
