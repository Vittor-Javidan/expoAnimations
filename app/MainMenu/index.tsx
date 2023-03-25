import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text } from 'react-native'
import Layout from '../../components/Layout'
import Colors from '../../Constants/Colors'
import { E, SIZE } from '../../Constants/Sizes'


export default function MainMenu(): JSX.Element {
    
    const router = useRouter()

    return (
        <Layout
            navBarTitle='MainMenu'
            childrenViewStyle={styles.mainContainer}
        >
            <Pressable
                style={styles.pureAnimationButton}
                onPress={() => {
                    router.push('/PureAnimation')
                }}
            >
                <Text 
                    style={styles.pureAnimationText}
                >
                    PureAnimations
                </Text>
            </Pressable>
        </Layout>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    pureAnimationButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: SIZE * E,
        backgroundColor: Colors.lightGray
    },
    pureAnimationText: {
        fontSize: SIZE,
        color: Colors.black,
    },
})