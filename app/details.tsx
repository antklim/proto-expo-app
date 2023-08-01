import { View, StyleSheet, Text } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

const Details = () => {
  const router = useRouter()
  const params = useLocalSearchParams<{name: string}>()

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: `Hi ${params.name}`,
        }}
      />
      <Text
        onPress={() => {
          router.setParams({ name: 'Updated' });
        }}>
        Update the title
      </Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
