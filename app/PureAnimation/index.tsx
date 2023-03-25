import { StyleSheet } from "react-native";
import Animated from 'react-native-reanimated';
import Layout from "../../components/Layout/Layout";
import squareAnimation from './animations';

const SQUARE_SIZE = 100

export default function Page2Component(): JSX.Element {

    return (
        <Layout
            navBarTitle="Pure Animations"
            childrenViewStyle={styles.container}
            goBackRoute={'/MainMenu'}
        >
            <Animated.View
                style={[styles.square, squareAnimation()]}
            ></Animated.View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    square: {
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        backgroundColor: "#00F"
    },
})
