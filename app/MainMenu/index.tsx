import { useRouter } from 'expo-router'
import { Href } from 'expo-router/src/link/href'
import { Pressable, ScrollView, Text } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import Layout from '../../components/Layout/Layout'
import { animation_WhitePress } from './animations'
import { styles } from './styles'

const menuItems: {
    name: string
    href: Href
}[] = [
    {
        name: 'Pure Animations',
        href: '/PureAnimation'
    },
    {
        name: 'Practice Gestures',
        href: '/PracticeGestures'
    }
]

export default function MainMenu(): JSX.Element {
    return (
        <Layout
            navBarTitle='MainMenu'
            childrenViewStyle={styles.mainContainer}
        >
            <ScrollView>
                {menuItems.map(item => (
                    <MenuItem 
                        key={item.name}
                        itemName={item.name}
                        route={item.href}
                    />
                ))}
            </ScrollView>
            <MenuItem 
                itemName='Config'
                route={'/MainMenu'}
            />
        </Layout>
    )
}


function MenuItem(props: {
    route: Href
    itemName: string
}): JSX.Element {

    const router = useRouter()
    const animations = {
        buttons: animation_WhitePress()
    }

    return (
        <PanGestureHandler
            onGestureEvent={animations.buttons.panGestureHandler}
        >
            <Animated.View
                style={[styles.menuItemButton, animations.buttons.animatedStyle]}
            >
                <Pressable
                    style={styles.pressableArea}
                    onPress={() => {
                        router.push(props.route)
                    }}
                >
                    <Text 
                        style={styles.menuItemText}
                    >
                        {props.itemName}
                    </Text>
                </Pressable>
            </Animated.View>
        </PanGestureHandler>
    )
}