
export default interface IEntityRepository<E extends { _id: string }> {
  list(): Promise<E[]>
  create(entity: E): Promise<E>
  getById(entityId: E['_id']): Promise<E|null>
  update(entity: E): Promise<E>
  delete(entityId: E['_id']): Promise<void>
}