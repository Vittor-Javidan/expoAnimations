import { useContext, useState } from "react"
import { Pressable, StyleSheet } from 'react-native'
import { MotiView } from 'moti'
import { useRouter } from "expo-router"
import Ionicons from '@expo/vector-icons/Ionicons'

import { NavbarContext } from '.'
import Colors from "../../Constants/Colors"
import { AppSettings, E2 } from '../../Constants/Sizes'

export default function Navbar_GoBackButton(): JSX.Element {

    const { goBackRoute } = useContext(NavbarContext)
    const [isPressed, setIspressed] = useState<boolean>(false)
    const route = useRouter()

    return (
        <MotiView
            style={styles.backButton}
            from={{
                backgroundColor: Colors.lightGray
            }}
            animate={{
                backgroundColor: isPressed ? "#FFF" : Colors.lightGray
            }}
            transition={{
                type: 'timing',
                duration: isPressed ? 50 : 300
            }}
        >
            <Pressable
                style={styles.pressableArea}
                onPressIn={() => {
                    setIspressed(true)
                }}
                onPressOut={() => {
                    setIspressed(false)
                }}
                onPress={() => {
                    if(goBackRoute) {
                        route.push(goBackRoute)
                    }
                    setIspressed(false)
                }}
            >
                <Ionicons name='chevron-back' style={styles.icon}/>
            </Pressable>
        </MotiView>
    )
}

const styles = StyleSheet.create({
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        backgroundColor: Colors.lightGray,
    },
    pressableArea: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    icon: {
        fontSize: AppSettings.font * E2,
        color: Colors.darkGray,
    }
})

