
export default class BadSetValueError {
  valueName: string
  message: string
  constructor(valueName: string, message: string) {
    this.valueName = valueName
    this.message = message
  }

  static invalidValueTo(valueName: string) {
    return new this(valueName, `Invalid value passed to ${valueName.toLowerCase()}`)
  }
}