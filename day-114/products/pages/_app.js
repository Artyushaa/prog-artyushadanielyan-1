import "../global/main.scss";
import { Provider } from 'react-redux';
import Layout from "./layout";
import { wrapper } from "../app/store";


export default function MyApp({ Component, ...rest }) {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <Layout>
                <Component {...props.pageProps} />
            </Layout>
        </Provider>
    )
}