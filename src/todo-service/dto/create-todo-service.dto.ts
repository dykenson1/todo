import { IsString, IsOptional, IsBoolean, Length } from 'class-validator';

export class CreateTodoServiceDto {
  @IsString()
  @Length(1, 255)
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}
