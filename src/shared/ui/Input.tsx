import { TextInput, View, Text, TextInputProps } from 'react-native'

import { cn } from '@/shared/lib/cn'

type InputProps = TextInputProps & {
  label?: string
  error?: string
}

export const Input = ({ label, error, className, ...props }: InputProps) => {
  return (
    <View className="gap-1">
      {label && (
        <Text className="text-sm font-medium text-gray-600">{label}</Text>
      )}
      <TextInput
        className={cn(
          'border border-gray-200 rounded-xl px-4 py-3 text-base text-black bg-gray-50',
          error && 'border-red-400',
          className,
        )}
        placeholderTextColor="#9ca3af"
        {...props}
      />
      {error && (
        <Text className="text-sm text-red-400">{error}</Text>
      )}
    </View>
  )
}
