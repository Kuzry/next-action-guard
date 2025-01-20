"use client";

import { useAction } from "next-action-guard";
import { exampleServerAction } from "@/app/server-action";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const Form = ({}) => {
  const { execute, isPending, result } = useAction(exampleServerAction);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      z.object({
        name: z
          .string()
          .min(3, { message: "Please enter minimum 3 characters" }),
      }),
    ),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = () => {
    execute({
      name: "prororo",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-[300px]"
    >
      <pre>{JSON.stringify(result, null, 2)}</pre>
      <div>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <div>
              <input
                {...field}
                type="text"
                className="rounded bg-gray-200 px-4 py-2 w-full"
                placeholder="Enter your name"
              />
              {errors.name && (
                <div className="text-red-400 text-center">
                  {errors.name?.message}
                </div>
              )}
            </div>
          )}
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-amber-500 rounded px-4 py-2">
          {isPending ? "Loading..." : "Click"}
        </button>
      </div>
    </form>
  );
};
