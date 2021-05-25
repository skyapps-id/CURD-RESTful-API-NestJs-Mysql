import { IsNumber, IsString } from "class-validator"

export class UserDto {
  @IsNumber()
  id: number;

  @IsNumber()
  name: string;

  @IsString()
  lastName: string;
}
