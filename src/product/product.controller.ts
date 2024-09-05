import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  Query,
} from '@nestjs/common';

import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  // CONTROLLER CONSTRUCTOR
  constructor(private productService: ProductService) {}

  // CREATE PRODUCT
  @Post('/create')
  async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const product = await this.productService.createProduct(createProductDTO);
    res.status(HttpStatus.OK).json({
      message: 'Product created successfully',
      product,
    });
  }

  // GET ALL PRODUCTS
  @Get('/')
  async getProducts(@Res() res) {
    const products = await this.productService.getProducts();
    res.status(HttpStatus.OK).json({
      message: 'Products fetched successfully',
      products,
    });
  }

  // GET PRODUCT BY ID
  @Get('/:productID')
  async getProduct(@Res() res, @Param('productID') productID: string) {
    console.log('productID', productID);

    const product = await this.productService.getProduct(productID);
    if (!product) {
      res.status(HttpStatus.NOT_FOUND).json({
        message: 'Product not found',
      });
    }
    res.status(HttpStatus.OK).json({
      message: 'Product fetched successfully',
      product,
    });
  }

  // DELETE PRODUCT BY ID
  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('productID') productID) {
    const product = await this.productService.deleteProduct(productID);
    if (!product) {
      res.status(HttpStatus.NOT_FOUND).json({
        message: 'Product not found',
      });
    }
    res.status(HttpStatus.OK).json({
      message: 'Product deleted successfully',
      product,
    });
  }

  // UPDATE PRODUCT
  @Put('/update')
  async updateProduct(
    @Res() res,
    @Body() createProductDTO: CreateProductDTO,
    @Query('productID') productID,
  ) {
    const product = await this.productService.updateProduct(
      productID,
      createProductDTO,
    );
    if (!product) {
      res.status(HttpStatus.NOT_FOUND).json({
        message: 'Product not found',
      });
    }
    res.status(HttpStatus.OK).json({
      message: 'Product updated successfully',
      product,
    });
  }
}
