import "../styles/index.css";
import { AppProps } from "next/app";
import Container from "../components/Container";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

export default MyApp;
