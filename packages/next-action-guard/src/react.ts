"use client";

import { useState } from "react";
import { TNagCallback, TNagCallbackInfer } from "@/types";

export const useAction = <Schema>(callback: TNagCallbackInfer<Schema>) => {
  const [isPending, setIsPending] = useState(false);

  return {
    execute: (data: TNagCallbackInfer<Schema>) => {
      console.log("--Execute--");
      setIsPending(true);
      // void callback().then(() => {
      //   setIsPending(false);
      // });
    },
    addMetadata: () => {},
    isPending,
  };
};
