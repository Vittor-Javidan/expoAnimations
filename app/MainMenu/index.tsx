import { useRouter } from 'expo-router'
import { Href } from 'expo-router/src/link/href'
import { Pressable, StyleSheet, Text } from 'react-native'
import Layout from '../../components/Layout'
import Colors from '../../Constants/Colors'
import { E, SIZE } from '../../Constants/Sizes'

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
    
    const router = useRouter()

    return (
        <Layout
            navBarTitle='MainMenu'
            childrenViewStyle={styles.mainContainer}
        >
            {menuItems.map(item => (
                <Pressable
                    style={styles.menuItemButton}
                    onPress={() => {
                        router.push(item.href)
                    }}
                >
                    <Text 
                        style={styles.menuItemText}
                    >
                        {item.name}
                    </Text>
                </Pressable>
            ))}
        </Layout>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    menuItemButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: SIZE * E,
        backgroundColor: Colors.lightGray
    },
    menuItemText: {
        fontSize: SIZE,
        color: Colors.black,
    },
})