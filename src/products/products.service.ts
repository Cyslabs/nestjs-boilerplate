import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './infrastructure/persistence/product.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Product } from './domain/product';

@Injectable()
export class ProductsService {
  constructor(
    // Dependencies here
    private readonly productRepository: ProductRepository,
  ) {}

  async create(createProductDto: CreateProductDto) {
    // Do not remove comment below.
    // <creating-property />

    return this.productRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      name: createProductDto.name,

      price: createProductDto.price,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.productRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Product['id']) {
    return this.productRepository.findById(id);
  }

  findByIds(ids: Product['id'][]) {
    return this.productRepository.findByIds(ids);
  }

  async update(
    id: Product['id'],

    updateProductDto: UpdateProductDto,
  ) {
    // Do not remove comment below.
    // <updating-property />

    return this.productRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      name: updateProductDto.name,

      price: updateProductDto.price,
    });
  }

  remove(id: Product['id']) {
    return this.productRepository.remove(id);
  }
}
