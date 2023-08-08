import { Stack } from 'expo-router'

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router'

// Add initial route here.
// export const unstable_settings = {
//   initialRouteName: 'foo bar',
// }

const RootLayout = () => {
  const commonStackOptions = {}

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
    >
      <Stack.Screen name="index" options={{ ...commonStackOptions }} />
      <Stack.Screen name="details" options={{ ...commonStackOptions }} />
      <Stack.Screen name="modal"
        options={{
          ...commonStackOptions,
          presentation: 'modal',
        }}
      />
    </Stack>
  )
}

export default RootLayout
