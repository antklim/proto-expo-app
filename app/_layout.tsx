import { Stack } from 'expo-router'

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: 'My App'
      }}
    />
  )
}

export default RootLayout
