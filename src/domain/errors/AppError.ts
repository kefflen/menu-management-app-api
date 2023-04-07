export default class AppError {
  public message: string
  public code: number
  constructor(message: string, code: number) {
    this.message = message
    this.code = code
  }

  static notFound(message: string) {
    return new this(message, 404)
  }

  static unauthorized(message: string) {
    return new this(message, 401)
  }
}