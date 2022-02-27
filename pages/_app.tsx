import "../styles/index.css";
import { AppProps } from "next/app";
import Container from "@/components/layout/Container";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "plyr-react/dist/plyr.css";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <Container title={router.pathname.substring(1)}>
      <Component {...pageProps} />
    </Container>
  );
};

export default MyApp;
