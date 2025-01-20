import { NextRequest } from "next/server";
import { TNagCallbackInfer, TNagSchema } from "@/types";

export class Nag<Schema extends TNagSchema> {
  protected schema: Schema | undefined;

  protected callback: TNagCallbackInfer<Schema> | undefined;

  setSchema(schema: Schema) {
    this.schema = schema;
    return this;
  }

  middleware() {}

  action(callback: TNagCallbackInfer<Schema>) {
    this.callback = callback;
    return async (request: NextRequest) => {
      console.log("----a-a-a-a-a-a----....");
      // @ts-ignore
      // console.log(this);
      console.log(request);
      if (callback) {
        // const response = await callback({
        //   data: "",
        // });
        console.log("respoooo");
        // console.log(response);
      }
    };
  }
}

export const createServerAction = () => {
  const nag = new Nag();

  return nag;
};

export { useAction } from "./react";

// useAction -> return isPending, execute, setMetadata, ...
