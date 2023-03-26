import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { Href } from 'expo-router/src/link/href'
import { Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { backButtonSlide } from './animations'
import { styles } from './styles'

export default function Navbar(props: {
    title: string
    goBackRoute?: Href
}): JSX.Element {

    const route = useRouter()
    const slideAnimation = backButtonSlide()

    return (
        <View 
            style={props.goBackRoute
                ? styles.navbarWithButton
                : styles.navbarWithoutButton
            }
        >
            <Text 
                style={props.goBackRoute
                    ? styles.titleWithButton
                    : styles.title
                }
            >
                {props.title}
            </Text>
            {props.goBackRoute !== undefined && (
                <PanGestureHandler
                    onGestureEvent={slideAnimation.panGestureHandler}
                >
                    <Animated.View
                        style={[styles.animatedView, slideAnimation.animatedStyle]}
                        onTouchEnd={() => {
                            if(props.goBackRoute) {
                                route.push(props.goBackRoute)
                            }
                        }}
                    >
                        <Ionicons name='chevron-back' style={styles.icon}/>
                    </Animated.View>
                </PanGestureHandler>
            )}
        </View>
    )
}
