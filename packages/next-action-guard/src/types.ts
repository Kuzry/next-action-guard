import { z, ZodType } from "zod";

export type TNagSchemaLibraries = z.ZodObject<z.ZodRawShape>;

export type TNagSchema =
  | TNagSchemaLibraries
  | ((data: { [key: string]: any }) => Promise<TNagSchemaLibraries>)
  | undefined;

// export type TNagMetadata =
//   | { [key: string]: {} }
//   | (() => Promise<{ [key: string]: {} }>)
//   | undefined;

export type TNagCallback<TData = {}, TMetadata = {}> = (props: {
  data: TData;
  metadata: TMetadata;
}) => Promise<{ [key: string]: any }>;

export const isSchemaAFunction = (
  schema: TNagSchema,
): schema is (data: { [key: string]: any }) => Promise<TNagSchemaLibraries> => {
  return typeof schema === "function";
};

export const isSchemaAZod = (
  schema: TNagSchema,
): schema is z.ZodObject<z.ZodRawShape> => {
  return schema instanceof ZodType;
};
