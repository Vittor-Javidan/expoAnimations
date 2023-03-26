import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler"
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated"

class CoordsData {

    private static x = 0
    private static y = 0

    static saveData(coordX: number, coordY: number): void {
        this.x = coordX
        this.y = coordY
    }

    static getX(): number { return this.x }
    static getY(): number { return this.y }
}

export function squareDrag() {

    const color = useSharedValue("#00F")
    const coordenateX = useSharedValue(CoordsData.getX())
    const coordenateY = useSharedValue(CoordsData.getY())

    const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number, y: number}>({
        
        onStart: (event, context) => {
            context.x = coordenateX.value
            context.y = coordenateY.value
            color.value = "#0F0"
        },
        
        onActive: (event, context) => {

            coordenateX.value = event.translationX + context.x
            coordenateY.value = event.translationY + context.y

            CoordsData.saveData(
                event.translationX + context.x,
                event.translationY + context.y
            )

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