import React, { cloneElement, createContext, useContext } from "react";
import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";
import { Text, View } from "react-native";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormContext = createContext<UseFormReturn<any> | null>(null);

export const useFormContext = <T extends FieldValues>() => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext must be used inside <Form>");
  return ctx as UseFormReturn<T>;
};

type FormProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  children: React.ReactNode;
};

const FormRoot = <T extends FieldValues>({ form, children }: FormProps<T>) => {
  return (
    <FormContext.Provider value={form}>
      <View className="flex-col gap-4">{children}</View>
    </FormContext.Provider>
  );
};

type FormItemProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  children: React.ReactElement<{
    value: string;
    onChangeText: (v: string) => void;
    onBlur: () => void;
  }>;
};

const FormItem = <T extends FieldValues>({
  name,
  label,
  rules,
  children,
}: FormItemProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View className="gap-1">
          {label && (
            <Text className="text-sm font-medium text-gray-600">{label}</Text>
          )}

          {cloneElement(children, {
            value,
            onChangeText: onChange,
            onBlur,
          })}

          {error && (
            <Text className="text-sm text-red-400">{error.message}</Text>
          )}
        </View>
      )}
    />
  );
};

export const Form = Object.assign(FormRoot, { Item: FormItem });
