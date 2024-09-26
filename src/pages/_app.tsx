import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import type {AppProps} from "next/app";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from 'next/router'

NProgress.configure({});
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({Component, pageProps}: AppProps) {
    return (
        <div>
            <Component {...pageProps} />
            <ToastContainer position="top-center"></ToastContainer>
        </div>
    )
}

export default App;
