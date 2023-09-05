import Script from "next/script";
import "./layout.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-NRN6NT762E" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-NRN6NT762E');
          `}
      </Script>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
