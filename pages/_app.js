import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
