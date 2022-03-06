import React from "react";
import "../styles/App.scss";
import "../styles/Main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalContextProvider } from "../components/context/GlobalContextProvider";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <GlobalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  );
}

export default MyApp;
