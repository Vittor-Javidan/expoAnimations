import { ReactNode, useContext } from 'react'
import { StyleSheet, View } from 'react-native'

import Colors from '../../Constants/Colors'
import { NavbarContext } from './context'

export default function Navbar_MainView(props: {
    children: ReactNode
}): JSX.Element {

    const { goBackRoute } = useContext(NavbarContext)

    return (
        <View 
            style={goBackRoute
                ? styles.withBackButton
                : styles.withoutBackButton
            }
        >
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    
    withoutBackButton: {
        backgroundColor: Colors.darkGray,
    },
    withBackButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.darkGray,
    },
})