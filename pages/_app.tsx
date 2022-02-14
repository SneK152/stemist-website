import "../styles/index.css";
import { AppProps } from "next/app";
import Container from "../components/Container";
import AOS from "aos";
import { useEffect } from "react";

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
