import { Pressable, Text } from 'react-native'

import { cn } from '@/shared/lib/cn'

type ButtonProps = {
  children: string
  onPress: () => void
  variant?: 'primary' | 'outline'
  className?: string
}

export const Button = ({ children, onPress, variant = 'primary', className }: ButtonProps) => {
  const isPrimary = variant === 'primary'

  return (
    <Pressable
      onPress={onPress}
      className={cn(
        'rounded-xl py-4 items-center border',
        isPrimary ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-blue-500',
        className,
      )}
    >
      <Text
        className={cn(
          'text-lg font-semibold',
          isPrimary ? 'text-white' : 'text-blue-500',
        )}
      >
        {children}
      </Text>
    </Pressable>
  )
}
