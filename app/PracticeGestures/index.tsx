import { PanGestureHandler } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"
import Layout from "../../components/Layout/Layout"
import { squareDrag } from "./animations"
import { styles } from "./styles"
import CoordsData from "./volatileDB"

export default  function PracticeGestures(): JSX.Element {
    
    const animations = {
        squareDrag: squareDrag(CoordsData.x, CoordsData.y)
    }

    return (
        <Layout
            navBarTitle="Practice Gestures"
            childrenViewStyle={styles.container}
            goBackRoute={'/MainMenu'}
        >
            <PanGestureHandler
                onGestureEvent={animations.squareDrag.panGestureHandler}
                onEnded={() => {
                    CoordsData.x = animations.squareDrag.coordenateX.value
                    CoordsData.y = animations.squareDrag.coordenateY.value
                }}
            >
                <Animated.View
                    style={[styles.square, animations.squareDrag.animatedStyle]}
                />
            </PanGestureHandler>
        </Layout>
    )
}
