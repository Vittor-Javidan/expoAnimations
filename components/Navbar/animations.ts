import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import Colors from "../../Constants/Colors";

export function backButtonSlide() {

    const backgroundColor = useSharedValue<string>(Colors.lightGray)
    const actionConfirmed = useSharedValue<boolean>(false)

    const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {coordX: number}>({
        onStart: () => {
            backgroundColor.value = "#F00"
        },
        onActive: (event) => {
            backgroundColor.value = "#0F0"
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