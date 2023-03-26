import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { Href } from 'expo-router/src/link/href'
import { ReactNode } from 'react'
import { StyleProp, Text, TextStyle, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { animation_backButton } from './animations'
import { styles } from './styles'

export default function Navbar(props: {
    title: string
    goBackRoute?: Href
}): JSX.Element {

    return (
        <View 
            style={props.goBackRoute
                ? styles.navbarWithButton
                : styles.navbarWithoutButton
            }
        >
            <Title 
                style={props.goBackRoute
                    ? styles.titleWithButton
                    : styles.title
                }
            >
                {props.title}
            </Title>
            {props.goBackRoute !== undefined && (
                <GoBackButton
                    goBackRoute={props.goBackRoute}
                />
            )}
        </View>
    )
}

function Title(props: {
    style: StyleProp<TextStyle>
    children: ReactNode
}): JSX.Element {
    return (
        <Text 
            style={props.style}
        >
            {props.children}
        </Text>
    )
}

function GoBackButton(props: {
    goBackRoute: Href
}) {

    const route = useRouter()
    const slideAnimation = animation_backButton()

    return (
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
    )
}
