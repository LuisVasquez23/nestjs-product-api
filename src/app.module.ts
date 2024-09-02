import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb://root:password@localhost:27017/products-api?authSource=admin',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
