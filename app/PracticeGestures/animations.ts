import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler"
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import Coordenates from "../../TempData/coordenates"

export function squareAnimations() {

    const color = useSharedValue("#00F")
    const coordenateX = useSharedValue(Coordenates.x)
    const coordenateY = useSharedValue(Coordenates.y)

    const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number, y: number}>({
        onStart: (event, context) => {
            context.x = coordenateX.value
            context.y = coordenateY.value
            color.value = "#0F0"
        },
        onActive: (event, context) => {
            coordenateX.value = event.translationX + context.x
            coordenateY.value = event.translationY + context.y
            Coordenates.x = event.translationX + context.x
            Coordenates.y = event.translationY + context.y
            console.log(coordenateX.value)
            console.log(coordenateY.value)
            color.value = "#F00"
        },
        onFinish: (event, context) => {
            console.log(`context: x = ${context.x} y = ${context.y}`)
            console.log(`ACABOU X:${event.translationX} Y:${event.translationY}`)
            color.value = "#00F"
        }
    })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: color.value,
            transform: [
                { translateX: coordenateX.value },
                { translateY: coordenateY.value }
            ]
        }
    })

    return {
        panGestureHandler,
        animatedStyle,
        coordenateX,
        coordenateY
    }
}