import { Tabs } from 'expo-router'
import { SymbolView } from 'expo-symbols'

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="chats/index"
        options={{
          title: 'Чаты',
          tabBarIcon: ({ color }) => (
            <SymbolView name="bubble.left.and.bubble.right" tintColor={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Профиль',
          tabBarIcon: ({ color }) => (
            <SymbolView name="person.circle" tintColor={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: 'Настройки',
          tabBarIcon: ({ color }) => (
            <SymbolView name="gearshape" tintColor={color} size={24} />
          ),
        }}
      />
    </Tabs>
  )
}
