import { StyleSheet, Text } from "react-native"
import { useSharedValue } from "react-native-reanimated"
import Layout from "../../components/Layout"
import Colors from "../../Constants/Colors"

export default  function PracticeGestures(): JSX.Element {

    const coordinateX = useSharedValue(0)
    const coordinateY = useSharedValue(0)

    return (
        <Layout
            navBarTitle="Gestures"
            childrenViewStyle={styles.container}
            goBackRoute={'/MainMenu'}
        >
            <Text>Gestures</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black
    },
})