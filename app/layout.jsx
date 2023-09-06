import Script from "next/script";
import "./layout.css";
import "./globals.css";

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
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-RZYK6J2QZ2');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
