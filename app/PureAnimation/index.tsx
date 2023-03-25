import { StyleSheet, View } from "react-native";
import Animated from 'react-native-reanimated';
import squareAnimation from './animations';

const SQUARE_SIZE = 100

export default function Page2Component(): JSX.Element {

    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.square, squareAnimation()]}
            ></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0F0"
    },
    square: {
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        backgroundColor: "#00F"
    },
})
