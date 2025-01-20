"use server";

import { createServerAction } from "next-action-guard";
import { z } from "zod";

export const exampleServerAction = createServerAction()
  .setSchema(
    z.object({
      name: z.string().min(3),
    }),
  )
  .action(async ({ data, metadata }) => {
    await new Promise((r) => setTimeout(r, 2000));

    return {
      data: "response from example server action",
    };
  });
