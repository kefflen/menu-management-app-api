import { z } from 'zod'

export const categoryZodSchema = z.object({
  id: z.string().uuid('Need to pass a valid id'),
  name: z.string().min(1, 'Need to pass a valid category name'),
  parentId: z.string().uuid('Need to pass a valid parent id'),
})

export const productZodSchema = z.object({
  id: z.string().uuid('Should pass a valid product id'),
  name: z.string().min(1, 'Should pass a valid product name'),
  price: z.number().nonnegative('Should pass a valid product price'),
  qty: z.number().nonnegative('Should pass a valid quantity'),
  categoryIds: z.array(z.string().uuid('Should pass a valid category ids')),
})

export const userZodSchema = z.object({
  id: z.string().uuid('Should pass a valid user id'),
  name: z.string().min(1, 'Shoud pass a valid user name'),
  password: z.string().min(5, 'Shoud pass a valid password'),
  email: z.string().email('Shoud pass a valid email'),
  isAdmin: z.boolean().describe('Shoud pass a valid valud to isAdmin'),
})