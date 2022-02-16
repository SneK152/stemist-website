import "../styles/index.css";
import { AppProps } from "next/app";
import Container from "@/components/layout/Container";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

export default MyApp;
