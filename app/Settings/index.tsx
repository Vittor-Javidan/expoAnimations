import Layout from "../../components/Layout/Layout";

export default function Settings(): JSX.Element {
    return (
        <Layout
            navBarTitle="Settings"
            returnRoute={"/MainMenu"}
            childrenViewStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        >

        </Layout>
    )
}
