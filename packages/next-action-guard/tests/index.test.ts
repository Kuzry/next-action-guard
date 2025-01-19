import { expect, test } from "vitest";
import { createServerAction, Nag } from "../src";

test("init", () => {
  const serverAction = createServerAction();

  expect(serverAction).toBeInstanceOf(Nag);

  serverAction.action(async () => {
    return "";
  });
});
