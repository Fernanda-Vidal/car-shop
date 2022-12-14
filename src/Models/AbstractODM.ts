import { model, Model, models, Schema, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM <T> {
  protected model: Model<T>;
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

  public async getAll(): Promise <T[]> {
    return this.model.find({});
  }

  public async getById(id:string): Promise <T | null> {
    return this.model.findById(id);
  }

  public async update(_id: string, obj: Partial<T>): Promise <T | null> {
    return this.model.findByIdAndUpdate({ _id }, { ...obj } as UpdateQuery<T>, { new: true });
  }

  public async delete(_id: string) {
    return this.model.deleteOne({ _id });
  }
}