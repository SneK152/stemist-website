import "../styles/index.css";
import { AppProps } from "next/app";
import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    // const callback = () => {
    //   AOS.refresh();
    // };
    // AOS.init({
    //   once: true,
    //   easing: "ease-in-out-sine",
    //   duration: 400,
    // });
    smoothscroll.polyfill();
    // router.events.on("routeChangeComplete", callback);
    // return () => {
    //   router.events.off("routeChangeComplete", callback);
    // };
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
