import { Request, Response } from 'express'
import makeProductServices from '../factories/makeProductServices'
import { productZodSchema } from '../ZodSchemas'

const {
  createProductService,
  getProductByIdService,
  listProductsService,
  updateProductService,
  deleteProductService,
} = makeProductServices()



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
