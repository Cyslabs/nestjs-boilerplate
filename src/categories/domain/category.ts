import { ApiProperty } from '@nestjs/swagger';

export class Category {
  @ApiProperty({
    type: () => String,
    nullable: false,
  })
  firstName?: string;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
