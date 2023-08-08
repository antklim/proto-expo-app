import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Pressable, Text, View } from 'react-native'

const Modal = () => {
  // If the page was reloaded or navigated to directly, then the modal should be presented as a full screen page.
  const isPresented = router.canGoBack();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {!isPresented && <Link href="../">Dismiss</Link>}

      <StatusBar style="light" />

      {isPresented &&
        <Pressable
          onPress={() => {
            router.back()
          }}
        >
          <Text>Close modal</Text>
        </Pressable>
      }
    </View>
  )
}

export default Modal
