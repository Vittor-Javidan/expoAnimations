import { Text, View } from "react-native"
import { useSharedValue } from "react-native-reanimated"

export default  function PracticeGestures(): JSX.Element {

    const coordinateX = useSharedValue(0)
    const coordinateY = useSharedValue(0)

    return (
        <View>
            <Text>Gestures</Text>
        </View>
    )
}