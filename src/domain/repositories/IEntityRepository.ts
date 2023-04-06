
export default interface IEntityRepository<E extends { id: string }> {
  create(entity: E): Promise<E>
  getById(entityId: E['id']): Promise<E|null>
  update(entity: E): Promise<E>
  delete(entityId: E['id']): Promise<void>
}