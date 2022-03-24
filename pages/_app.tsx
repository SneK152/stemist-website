import "../styles/index.css";
import { AppProps } from "next/app";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import smoothscroll from "smoothscroll-polyfill";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    const callback = () => {
      AOS.refresh();
    };
    AOS.init({
      // once: true,
      easing: "ease-in-out-sine",
      duration: 400,
    });
    smoothscroll.polyfill();
    router.events.on("routeChangeComplete", callback);
    return () => {
      router.events.off("routeChangeComplete", callback);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
};

export default MyApp;
