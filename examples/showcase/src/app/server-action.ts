"use server";

import { createServerAction } from "next-action-guard";
import { z } from "zod";

export const exampleServerAction = createServerAction()
  .setSchema(
    z.object({
      name: z.string().min(3),
    }),
  )
  .action(async ({ data }) => {
    await new Promise((r) => setTimeout(r, 3000));

    return "response from example server action" + JSON.stringify(data);
  });
