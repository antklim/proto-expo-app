import { Stack } from 'expo-router'

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router'

// Add initial route here.
// export const unstable_settings = {
//   initialRouteName: 'foo bar',
// }

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
