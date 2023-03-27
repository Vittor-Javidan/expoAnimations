import { Href } from 'expo-router/src/link/href'
import { ReactNode } from 'react'
import { StatusBar, StyleProp, View, ViewStyle } from 'react-native'
import Navbar from '../Navbar'
import { getStyles } from './styles'

export default function Layout(props: {
    navBarTitle: string
    children: ReactNode
    childrenViewStyle: StyleProp<ViewStyle>
    goBackRoute?: Href
}): JSX.Element {

    const styles = getStyles()

    return (
        <View style={styles.mainContainer}>

            <StatusBar 
                hidden={true}
            />

            <Navbar 
                title={props.navBarTitle}
                goBackRoute={props.goBackRoute}
            />
            <ChildrenArea style={props.childrenViewStyle}>
                {props.children}
            </ChildrenArea>
        </View>
    )
}

function ChildrenArea(props: {
    style: StyleProp<ViewStyle>
    children: ReactNode
}): JSX.Element {
    return (
        <View style={props.style}>
            {props.children}
        </View>
    )
}
