import { expect, test } from "vitest";
import { createActionGuard, Nag } from "../src";
import { z } from "zod";

test("init1", () => {
  const serverAction = createActionGuard();

  expect(serverAction).toBeInstanceOf(Nag);

  serverAction.schema(
    z.object({
      name: z.string(),
    }),
  );
});

test("init2", () => {
  const serverAction = createActionGuard();

  serverAction.schema(async () => {
    return z.object({
      name: z.string(),
    });
  });
});

test("init3", () => {
  const serverAction = createActionGuard();

  serverAction.action(async ({ data }) => {
    return {};
  });
});
