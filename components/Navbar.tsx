import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { Href } from 'expo-router/src/link/href'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../Constants/Colors'
import { E, E2, E4, SIZE } from '../Constants/Sizes'

export default function Navbar(props: {
    title: string
    goBackRoute?: Href
}): JSX.Element {

    const route = useRouter()

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
                <Pressable 
                    style={styles.backButtonContainer}
                    onPress={() => {
                        if(props.goBackRoute) {
                            route.push(props.goBackRoute)
                        }
                    }}
                >
                    <Ionicons name='chevron-back' style={styles.icon}/>
                </Pressable>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    navbarWithoutButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: SIZE * E2,
        backgroundColor: Colors.darkGray,
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 2
    },
    navbarWithButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: SIZE * E2,
        backgroundColor: Colors.darkGray,
    },
    title: {
        paddingLeft: SIZE / E4,
        fontSize: SIZE * E,
        color: Colors.white
    },
    titleWithButton: {
        paddingLeft: SIZE / E4,
        fontSize: SIZE,
        color: Colors.white
    },
    backButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: SIZE * E2,
        width: SIZE * E2,
        backgroundColor: Colors.lightGray,
    },
    icon: {
        fontSize: SIZE,
        color: Colors.darkGray,
    }
})