import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Head>
          <title>Jordi Capellades</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
