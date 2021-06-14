import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @MaxLength(500)
  name: string;

  @IsNotEmpty()
  description: string;

  status = 'Open';
}
