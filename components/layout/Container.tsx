import Head from "next/head";
import Footer from "./Footer";
import Navbar from "../navbar/Navbar";

export default function Container({
  children,
  title = "",
  noNav = false,
  navTitle = "",
  customNav = [],
  hacks,
}: {
  children: React.ReactNode;
  title: string;
  noNav?: boolean;
  navTitle?: string;
  customNav?: any[];
  hacks?: boolean;
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta
          name="description"
          content="Accelerating education with engaging workshops. STEMist Education is a nonprofit that teaches STEM."
        />
        <meta itemProp="name" content={`STEMist Education | ${title}`} />
        <meta
          itemProp="description"
          content="Accelerating education with engaging workshops. STEMist Education is a nonprofit that teaches STEM."
        />
        <meta itemProp="image" content="/meta.png" />

        <meta
          property="og:site_name"
          content={`STEMist Education | ${title}`}
        />
        <meta property="og:url" content="https://joinstemist.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`STEMist Education | ${title}`} />
        <meta
          property="og:description"
          content="Accelerating education with engaging workshops. STEMist Education is a nonprofit that teaches STEM."
        />
        <meta property="og:image" content="/meta.png" />
        <meta property="og:image:alt" content="STEMist Education" />

        <meta name="twitter:title" content={`STEMist Education | ${title}`} />
        <meta
          name="twitter:description"
          content="Exceptional and Unparalleled STEM Education for kids"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Accelerating education with engaging workshops. STEMist Education is a nonprofit that teaches STEM."
        />
        <meta name="twitter:image" content="/meta.png" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="application-name"
          content={`STEMist Education | ${title}`}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content={`STEMist Education | ${title}`}
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <title>{`STEMist Education | ${title}`}</title>
        <meta name="title" content={`STEMist Education | ${title}`} />
        <meta
          name="keywords"
          content="stemist,stemist education,stem,teach,learn,kids,education"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="14 days" />
      </Head>
      <Navbar {...{ noNav, navTitle, customNav, hacks }} />
      <div className="mx-auto h-full">
        <div className="mx-auto overflow-hidden">{children}</div>
      </div>
      <Footer />
    </>
  );
}
