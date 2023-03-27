import { createContext } from 'react'
import { Href } from 'expo-router/src/link/href'

import Navbar_GoBackButton from './GoBackButton'
import Navbar_MainView from './MainView'
import Navbar_Title from './Title'
import { NavbarContext, NavbarProps } from './context'

export default function Navbar(props: {
    title: string
    returnRoute?: Href
}): JSX.Element {
    
    const values: NavbarProps = {
        goBackRoute: props.returnRoute,
        title: props.title
    }
    
    //TODO: Implementar compound pattern
    return (
        <NavbarContext.Provider value={values}>

            <Navbar_MainView>
                <Navbar_Title />
                {props.returnRoute && <Navbar_GoBackButton />}
            </Navbar_MainView>
            
        </NavbarContext.Provider>
    )
}
