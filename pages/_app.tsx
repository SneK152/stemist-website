import "../styles/index.css";
import { AppProps } from "next/app";
import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import NProgress from "nprogress";
// import "nprogress/nprogress.css";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", NProgress.start);
    router.events.on("routeChangeComplete", NProgress.done);
    router.events.on("routeChangeError", NProgress.done);
    return () => {
      router.events.off("routeChangeStart", NProgress.start);
      router.events.off("routeChangeComplete", NProgress.done);
      router.events.off("routeChangeError", NProgress.done);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default MyApp;
