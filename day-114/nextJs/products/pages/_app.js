import "../global/scss/main.scss";
import { Provider } from 'react-redux';
import Layout from "./layout";
import { store } from "../redux-toolkit/src/app/store";

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}