import { IsIn, IsOptional } from 'class-validator';

export class UpdateUserDto {
  name: string;
  email: string;

  @IsOptional()
  @IsIn(['male', 'female'])
  gender?: string;
}
