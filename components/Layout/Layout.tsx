import { Href } from 'expo-router/src/link/href'
import { ReactNode } from 'react'
import { StatusBar, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import Navbar from '../Navbar'


export default function Layout(props: {
    navBarTitle: string
    children: ReactNode
    childrenViewStyle: StyleProp<ViewStyle>
    goBackRoute?: Href
}): JSX.Element {
    return (
        <View style={styles.mainContainer}>

            <StatusBar 
                hidden={true}
            />

            <Navbar 
                title={props.navBarTitle}
                goBackRoute={props.goBackRoute}
            />
            <View style={props.childrenViewStyle}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#000"
    },
})