import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

export const useZodForm = <T extends FieldValues>(
  schema: z.ZodType<T>,
  defaultValues?: DefaultValues<T>,
) =>
  useForm<T>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema as any),
    defaultValues,
  });
