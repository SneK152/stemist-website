import "../styles/index.css";
import { AppProps } from "next/app";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
