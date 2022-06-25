import "../styles/index.css";
import { AppProps } from "next/app";
import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
