import { model, Model, models, Schema } from 'mongoose';

export default abstract class AbstractODM <T> {
  private model: Model<T>;
  private schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise <T> {
    return this.model.create({ ...obj });
  }
}