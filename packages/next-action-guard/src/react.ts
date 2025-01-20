"use client";

import { useEffect, useState } from "react";

export const useAction = <Schema>(serverAction: any) => {
  const [isPending, setIsPending] = useState(false),
    [result, setResult] = useState({});

  return {
    execute: (data: {}) => {
      setIsPending(true);
      void serverAction({
        data,
        metadata: {},
      })
        .then((data: {}) => {
          setResult(data);
        })
        .finally(() => {
          setIsPending(false);
        });
    },
    addMetadata: () => {},
    isPending,
    result,
  };
};
