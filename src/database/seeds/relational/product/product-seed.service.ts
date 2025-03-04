import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../../../../products/infrastructure/persistence/relational/entities/product.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { ProductFactory } from './product.factory';

@Injectable()
export class ProductSeedService {
  constructor(
    @InjectRepository(ProductEntity)
    private repository: Repository<ProductEntity>,
    private productFactory: ProductFactory,
  ) {}

  async run() {
    const countProduct = await this.repository.count();

    if (countProduct === 0) {
      const initialProduct = this.repository.create({
        name: 'First Product',
        price: '123456',
      });
      await this.repository.save(initialProduct);
    }

    await this.repository.save(
      faker.helpers.multiple(this.productFactory.createRandomProduct(), {
        count: 10,
      }),
    );
  }
}
