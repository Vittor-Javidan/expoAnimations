import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import Colors from "../../Constants/Colors";

export function animation_BackButton() {

    const backgroundColor = useSharedValue<string>(Colors.lightGray)
    const actionConfirmed = useSharedValue<boolean>(false)

    const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {coordX: number}>({
        onStart: () => {
            backgroundColor.value = "#FFF"
        },
        onActive: (event) => {
            backgroundColor.value = "#FFF"
        },
        onFinish: () => {
            backgroundColor.value = Colors.lightGray
        }
    })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: backgroundColor.value
        }
    })

    return {
        panGestureHandler,
        animatedStyle,
        actionConfirmed
    }
}