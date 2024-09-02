import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
  // Add constructor 👇
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<Product>,
  ) {}

  // Add get all products method 👇
  async getProducts(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  // Add get product by ID method 👇
  async getProduct(productID: string): Promise<Product> {
    return await this.productModel.findById(productID).exec();
  }

  // Add create product method 👇
  async createProduct(createProductDto: CreateProductDTO): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return await newProduct.save();
  }

  // Add delete product method 👇
  async deleteProduct(productID: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(productID);
  }

  // Add update product method 👇
  async updateProduct(
    productId: string,
    createProductDto: CreateProductDTO,
  ): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(
      productId,
      createProductDto,
      {
        new: true,
      },
    );
  }
}
