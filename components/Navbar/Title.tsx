import { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'

import { NavbarContext } from '.'
import Colors from '../../Constants/Colors'
import { AppSettings, E } from '../../Constants/Sizes'

export default function Navbar_Title(): JSX.Element {

    const {goBackRoute, title} = useContext(NavbarContext)

    return (
        <Text 
            style={goBackRoute
                ? styles.titleWithButton
                : styles.title
            }
        >
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        padding: AppSettings.elements / E,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: AppSettings.font * E,
        color: Colors.white
    },
    titleWithButton: {
        width: '75%',
        alignSelf: 'center',
        padding: AppSettings.elements / E,
        fontSize: AppSettings.font * E,
        color: Colors.white
    },
})