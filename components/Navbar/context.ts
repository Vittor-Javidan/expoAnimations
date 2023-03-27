import { Href } from 'expo-router/src/link/href'
import { createContext } from 'react'

export type NavbarProps =  {
    goBackRoute?: Href
    title: string
}

export const NavbarContext = createContext<NavbarProps>({ 
    goBackRoute: "", 
    title: ""}
)