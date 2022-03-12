import Head from "next/head";
import Footer from "./Footer";
import Navbar from "../navbar/Navbar";

export default function Container({
  children,
  title = "",
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Free STEM Education for kids" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.svg" />
        <meta name="og:title" property="og:title" content="STEMist Education" />
        <meta
          name="og:description"
          property="og:description"
          content="Free STEM Education for kids"
        />
        <meta property="og:site_name" content="STEMist Education" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="STEMist Education" />
        <meta
          name="twitter:description"
          content="Free STEM Education for kids"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="application-name" content="STEMist Education" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="STEMist Education" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <title>STEMist Education | {title}</title>
      </Head>
      <Navbar />
      <div className="mx-auto h-full">
        <div className="mx-auto overflow-hidden pt-14 min-h-[calc(100vh-12rem)]">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
