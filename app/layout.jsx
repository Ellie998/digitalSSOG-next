import "./layout.css";
export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
