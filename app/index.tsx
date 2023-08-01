import { Link, Stack } from 'expo-router'
import { Image, StyleSheet, Text, View } from 'react-native'

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      // source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      source={require('../assets/logo.png')}
    />
  )
}

const Home = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'My home',
          headerTitle: () => <LogoTitle />,
        }}
      />
      <Text>Open up 'app/index.tsx' to start working on your app!</Text>
      <Link href={{ pathname: 'details', params: { name: 'Bacon' } }}>Go to Details</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
