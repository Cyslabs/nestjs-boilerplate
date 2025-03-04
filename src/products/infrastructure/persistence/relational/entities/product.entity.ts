import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({
  name: 'product',
})
export class ProductEntity extends EntityRelationalHelper {
  @Column({
    nullable: false,
    type: String,
  })
  name: string;

  @Column({
    nullable: false,
    type: String,
  })
  price: string;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
