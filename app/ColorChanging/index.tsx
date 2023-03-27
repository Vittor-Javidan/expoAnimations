import Layout from "../../components/Layout/Layout";
import Button from './Button';

export default function ColorChanging(): JSX.Element {
    return (
        <Layout
            navBarTitle="Color Changing"
            goBackRoute={"/MainMenu"}
            childrenViewStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        >
            <Button />
        </Layout>
    )
}
