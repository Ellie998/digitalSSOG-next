export const runtime = "edge";

import Script from "next/script";
import "./layout.css";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <head>
        <meta
          name="naver-site-verification"
          content="7bc2ddaf7d98ebb70891ceb9bca0dbc61e27cbfb"
        />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RZYK6J2QZ2" />
        <Script id="google-analytics">
          {`const host = window.location.hostname;
          if(host != "localhost"){
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-RZYK6J2QZ2');
        }
          `}
        </Script>

        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
          crossOrigin="anonymous"></Script>
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <ToastContainer position="bottom-left" />
      </body>
    </html>
  );
}
