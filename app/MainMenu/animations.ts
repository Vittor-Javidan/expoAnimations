import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler"
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import Colors from "../../Constants/Colors"

export function buttonAnimation() {

    const color = useSharedValue(Colors.lightGray)

    const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        
        onStart: (event, context) => {
            color.value = "#FFF"
        },
        
        onActive: (event, context) => {
            color.value = "#FFF"
        },
        
        onFinish: (event, context) => {
            color.value = Colors.lightGray
        }
    })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: color.value,
        }
    })

    return {
        panGestureHandler,
        animatedStyle
    }
}