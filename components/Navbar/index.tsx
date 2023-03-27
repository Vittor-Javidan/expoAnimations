import { createContext } from 'react'
import { Href } from 'expo-router/src/link/href'

import Navbar_GoBackButton from './GoBackButton'
import Navbar_MainView from './MainView'
import Navbar_Title from './Title'

type NavbarProps =  {
    goBackRoute?: Href
    title: string
}

export const NavbarContext = createContext<NavbarProps>({ 
    goBackRoute: "", 
    title: ""}
)

export default function Navbar(props: {
    title: string
    goBackRoute?: Href
}): JSX.Element {
    
    const values: NavbarProps = {
        goBackRoute: props.goBackRoute,
        title: props.title
    }
    
    //TODO: Implementar compound pattern
    return (
        <NavbarContext.Provider value={values}>

            <Navbar_MainView>
                <Navbar_Title />
                <Navbar_GoBackButton />
            </Navbar_MainView>
            
        </NavbarContext.Provider>
    )
}
