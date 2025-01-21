"use server";

import { createActionGuard } from "next-action-guard";
import { z } from "zod";

export const exampleServerAction = createActionGuard()
  .schema(
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
