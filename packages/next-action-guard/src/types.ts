import { z } from "zod";

export type TNagSchemaLibraries = z.ZodObject<z.ZodRawShape>;

export type TNagSchema =
  | TNagSchemaLibraries
  | (() => Promise<TNagSchemaLibraries>)
  | undefined;

// export type TNagMetadata =
//   | { [key: string]: {} }
//   | (() => Promise<{ [key: string]: {} }>)
//   | undefined;

export type TNagCallback<T> =
  | ((props: { data: T }) => Promise<any>)
  | undefined;

export type TNagCallbackInfer<T> =
  T extends TNagCallback<infer T> ? T : undefined;
