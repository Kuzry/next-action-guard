import { expect, test } from "vitest";
import { createServerAction, Nag } from "../src";
import { z } from "zod";

test("init1", () => {
  const serverAction = createServerAction();

  expect(serverAction).toBeInstanceOf(Nag);

  serverAction.setSchema(
    z.object({
      name: z.string(),
    }),
  );
});

test("init2", () => {
  const serverAction = createServerAction();

  serverAction.setSchema(async () => {
    return z.object({
      name: z.string(),
    });
  });
});

test("init3", () => {
  const serverAction = createServerAction();

  serverAction.action(async ({ data }) => {
    return {};
  });
});
