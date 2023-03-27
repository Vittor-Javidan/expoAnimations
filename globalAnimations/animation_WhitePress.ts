import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler"
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated"

export function animation_WhitePress(initialBackgroundColor: string) {

    const color = useSharedValue(initialBackgroundColor)

    const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        
        onStart: (event, context) => {
            color.value = "#FFF"
        },
        
        onActive: (event, context) => {
            color.value = "#FFF"
        },
        
        onFinish: (event, context) => {
            color.value = initialBackgroundColor
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