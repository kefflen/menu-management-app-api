import Product from '../../../domain/entities/Product'
import AppError from '../../../domain/errors/AppError'
import IProductRepository from '../../../domain/repositories/IProductRepository'
import ProductModel from '../models/ProductModel'

export default class MongoProductRepository implements IProductRepository {
  async create(product: Product): Promise<Product> {
    const productDTO = await (await ProductModel.create(product)).populate('categories')
    return new Product(productDTO)
  }

  async list(): Promise<Product[]> {
    const categoriesDTO = await ProductModel.find().populate('categories')
    return categoriesDTO.map((productDTO) => new Product(productDTO))
  }

  async getById(productId: string): Promise<Product | null> {
    const productDTO = await ProductModel.findById(productId).populate(
      'categories'
    )
    if (!productDTO) return null
    return new Product(productDTO)
  }

  async update(product: Product): Promise<Product> {
    const { _id, ...otherProps } = product
    await ProductModel.updateOne({ _id }, otherProps)
    const productDTO = await ProductModel.findById(_id).populate(
      'categories'
    )

    if (!productDTO) throw AppError.notFound('Product not found')

    return new Product(productDTO)
  }

  async delete(productId: string): Promise<void> {
    await ProductModel.deleteOne({ _id: productId })
  }
}
