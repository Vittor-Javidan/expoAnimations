import { useState } from 'react';
import Layout from "../../components/Layout/Layout";
import { AppSettings } from '../../Constants/Sizes';

export default function Settings(): JSX.Element {

    const [fontSize, setFontSize] = useState<number>(AppSettings.font)
    const [elementsSize, setElementsSize] = useState<number>(AppSettings.elements)

    return (
        <Layout
            navBarTitle="Settings"
            goBackRoute={"/MainMenu"}
            childrenViewStyle={{flex: 1}}
        >
            
        </Layout>
    )
}