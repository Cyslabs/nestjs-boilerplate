import { ApiProperty } from '@nestjs/swagger';

export class Order {
  @ApiProperty({
    type: () => String,
    nullable: false,
  })
  price: string;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
