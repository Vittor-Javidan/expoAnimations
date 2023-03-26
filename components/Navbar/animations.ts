import { Dimensions } from "react-native";
import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import Colors from "../../Constants/Colors";
import { E2, SIZE } from "../../Constants/Sizes";

const { width: DEVICE_WIDTH } = Dimensions.get("screen")
const BUTTON_WIDTH = SIZE * E2

export function backButtonSlide() {

    const width = useSharedValue<number>(BUTTON_WIDTH)
    const coordX = useSharedValue<number>(0)
    const backgroundColor = useSharedValue<string>(Colors.lightGray)
    const actionConfirmed = useSharedValue<boolean>(false)

    const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {coordX: number}>({
        onStart: () => {
            backgroundColor.value = "#F00"
        },
        onActive: (event) => {
            if(coordX.value > BUTTON_WIDTH - DEVICE_WIDTH ) {
                backgroundColor.value = "#F00"
            } else {
                backgroundColor.value = "#0F0"
            }
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