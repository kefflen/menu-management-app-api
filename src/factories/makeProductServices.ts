import {
  CreateProductService,
  GetProductByIdService,
  ListProductsService,
  UpdateProductService,
  DeleteProductService,
} from '../domain/services/product-services'
import { productServicesDepedencies } from '../domain/services/product-services/ProductServices'
import MongoCategoryRepository from '../infra/mongo/repositories/MongoCategoryRepository'
import MongoProductRepository from '../infra/mongo/repositories/MongoProductRepository'

export default function makeProductServices() {
  const depedencies: productServicesDepedencies = {
    productRepository: new MongoProductRepository(),
    categoryRepository: new MongoCategoryRepository(),
  }

  return {
    createProductService: new CreateProductService(depedencies),
    getProductByIdService: new GetProductByIdService(depedencies),
    listProductsService: new ListProductsService(depedencies),
    updateProductService: new UpdateProductService(depedencies),
    deleteProductService: new DeleteProductService(depedencies),
  }
}
