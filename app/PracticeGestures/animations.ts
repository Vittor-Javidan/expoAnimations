import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export function animation_SquareDrag(coordX: number, coordY: number) {

    const color = useSharedValue("#00F")
    const coordenateX = useSharedValue(coordX)
    const coordenateY = useSharedValue(coordY)

    const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number, y: number}>({
        
        onStart: (event, context) => {
            context.x = coordenateX.value
            context.y = coordenateY.value
            color.value = "#0F0"
        },
        
        onActive: (event, context) => {

            coordenateX.value = event.translationX + context.x
            coordenateY.value = event.translationY + context.y
            color.value = "#F00"
        },
        
        onFinish: () => {
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