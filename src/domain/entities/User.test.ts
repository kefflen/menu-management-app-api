import BadSetValueError from '../errors/BadSetValueError'
import User, { userDTO } from './User'
import crypto from 'node:crypto'

describe('User entity', () => {
  const userData: userDTO = {
    _id: crypto.randomUUID(),
    email: 'user@example.com',
    name: 'John Doe',
    isAdmin: true,
    password: 'password',
  }

  describe('constructor', () => {
    it('should create a new user instance', () => {
      const user = new User(userData)
      expect(user).toMatchObject(userData)
    })

    it('should throw BadSetValueError if pass password with less than 5 caracteres to constructor', () => {
      const userDTO = {
        ...userData,
        password: '1234',
      }

      expect(() => new User(userDTO)).toThrowError(
        BadSetValueError
      )
    })

    it('shoud throw BadSetValueError if pass invalid email to constructor', () => {
      const userDTO = {
        ...userData,
        email: 'invalid_email',
      }

      expect(() => new User(userDTO)).toThrowError(BadSetValueError)
    })
  })

  describe('create static method', () => {
    const createUserDTO = {
      email: 'user@example.com',
      name: 'John Doe',
      isAdmin: true,
      password: 'password',
    }
    it('should create a new user with random UUID as ID', () => {
      const user = User.create(createUserDTO)

      expect(user._id).toBeDefined()
      expect(user._id).toMatch(
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
      )
      expect(user.password).toBe(createUserDTO.password)
      expect(user.email).toBe(createUserDTO.email)
      expect(user.name).toBe(createUserDTO.name)
    })

    it('should throw BadSetValueError if pass password with less than 5 caracteres to create method', () => {
      const userDTO = {
        ...createUserDTO,
        password: '1234',
      }

      expect(() => User.create(userDTO)).toThrowError(
        BadSetValueError
      )
    })

    it('shoud throw BadSetValueError if pass invalid email to create method', () => {
      const userDTO = {
        ...createUserDTO,
        email: 'invalid_email',
      }

      expect(() => User.create(userDTO)).toThrowError(BadSetValueError)
    })
  })

  describe('toObjectWithouPassword method', () => {
    it('should return a user DTO without the password field', () => {
      const user = new User(userData)
      const userWithoutPassword =
        user.toObjectWithoutPassword() as Partial<userDTO>

      const { password, ...restProps } = user
      expect(userWithoutPassword.password).toBeUndefined()
      expect(userWithoutPassword).toMatchObject(restProps)
    })
  })
})
