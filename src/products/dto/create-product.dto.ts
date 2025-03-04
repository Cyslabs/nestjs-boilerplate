import {
  // decorators here

  IsString,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    required: true,
    type: () => String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
    type: () => String,
  })
  @IsString()
  price: string;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
