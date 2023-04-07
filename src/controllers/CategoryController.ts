import { Request, Response } from 'express'
import makeCategoryServices from '../factories/makeCategoryServices'

const {
  createCategoryService,
  getCategoryByIdService,
  listCategoriesService,
  updateCategoryService,
  deleteCategoryService,
} = makeCategoryServices()

export async function createCategoryController(req: Request, res: Response) {
  const { name, parentId } = req.body
  const category = await createCategoryService.execute({
    name,
    parentCategoryId: parentId,
  })

  return res.status(201).json(category)
}

export async function getCategoryByIdController(req: Request, res: Response) {
  const categoryId = req.params.categoryId
  const category = await getCategoryByIdService.execute(categoryId)

  return res.json(category)
}

export async function listCategoriesController(req: Request, res: Response) {
  const categories = await listCategoriesService.execute()

  return res.json(categories)
}

export async function updateCategoryController(req: Request, res: Response) {
  const { id, name, parentId } = req.body

  const category = await updateCategoryService.execute(id, {
    name,
    parentCategoryId: parentId,
  })

  return res.json(category)
}

export async function deleteCategoryController(req: Request, res: Response) {
  const categoryId = req.params.categoryId
  await deleteCategoryService.execute(categoryId)

  return res.sendStatus(200)
}