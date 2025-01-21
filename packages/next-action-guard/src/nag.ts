import {
  isSchemaAFunction,
  isSchemaAZod,
  TNagCallback,
  TNagSchema,
} from "./types";

export class Nag<Schema extends TNagSchema> {
  protected _schema: Schema | undefined;

  schema(schema: Schema) {
    this._schema = schema;
    return this;
  }

  middleware() {}

  action(callback: TNagCallback) {
    return async (data: { [key: string]: any }) => {
      let localSchema: TNagSchema = this._schema,
        parsedData: { [key: string]: any } = {};

      if (isSchemaAFunction(localSchema)) {
        localSchema = await localSchema(data);
      }

      console.log("data...");
      console.log(data);

      if (isSchemaAZod(localSchema)) {
        parsedData = localSchema.parse(data.data);
      }

      return callback?.({
        data: parsedData,
        metadata: {},
      });
    };
  }
}

export const createActionGuard = () => {
  return new Nag();
};
