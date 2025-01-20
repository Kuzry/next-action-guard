"use client";

import { useAction } from "next-action-guard";
import { exampleServerAction } from "@/app/server-action";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const Form = ({}) => {
  const { execute, isPending } = useAction(exampleServerAction);

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
    execute({});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <div>
              <input
                {...field}
                type="text"
                className="rounded bg-gray-200 px-4 py-2 w-[300px]"
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
