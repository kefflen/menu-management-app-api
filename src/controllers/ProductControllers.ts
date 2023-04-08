import { Request, Response } from 'express'
import { z } from 'zod'
import makeProductServices from '../factories/makeProductServices'

const {
  createProductService,
  getProductByIdService,
  listProductsService,
  updateProductService,
  deleteProductService,
} = makeProductServices()

const productZodSchema = z.object({
  id: z.string().uuid('Should pass a valid product id'),
  name: z.string().min(1, 'Should pass a valid product name'),
  price: z.number().positive('Should pass a valid product price'),
  qty: z.number().positive('Should pass a valid quantity'),
  categoryIds: z.array(z.string().uuid('Should pass a valid category ids')),
})

const createProductSchema = productZodSchema.omit({ id: true })
export async function createProductController(req: Request, res: Response) {
  const { name, price, qty, categoryIds } = createProductSchema.parse(req.body)
  const product = await createProductService.execute({
    name,
    price,
    qty,
    categoryIds,
  })

  return res.status(201).json(product)
}

export async function getProductByIdController(req: Request, res: Response) {
  const productId = req.params.productId
  const product = await getProductByIdService.execute(productId)

  return res.json(product)
}

export async function listProductsController(req: Request, res: Response) {
  const products = await listProductsService.execute()

  return res.json(products)
}

const updateCategorySchema = productZodSchema.partial({
  name: true,
  price: true,
  qty: true,
  categoryIds: true,
})
export async function updateProductController(req: Request, res: Response) {
  const { id, name, price, qty, categoryIds } = updateCategorySchema.parse(req.body)
  const product = await updateProductService.execute(id, {
    name,
    price,
    qty,
    categoryIds,
  })

  return res.json(product)
}

export async function deleteProductController(req: Request, res: Response) {
  const productId = req.params.productId
  await deleteProductService.execute(productId)

  return res.sendStatus(200)
}
