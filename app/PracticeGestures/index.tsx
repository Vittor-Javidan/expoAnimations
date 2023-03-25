import { StyleSheet } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"
import Layout from "../../components/Layout/Layout"
import Colors from "../../Constants/Colors"
import { squareAnimations } from "./animations"

const SQUARE_SIZE = 100

export default  function PracticeGestures(): JSX.Element {
    
    const animations = squareAnimations()

    return (
        <Layout
            navBarTitle="Practice Gestures"
            childrenViewStyle={styles.container}
            goBackRoute={'/MainMenu'}
        >
            <PanGestureHandler
                onGestureEvent={animations.panGestureHandler}
            >
                <Animated.View
                    style={[styles.square, animations.animatedStyle]}
                />
            </PanGestureHandler>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.black,
    },
    square: {
        height: SQUARE_SIZE,
        width: SQUARE_SIZE,
        backgroundColor: "#00F",
        borderRadius: 20,
    }
})