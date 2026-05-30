import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nexis Tech Solutions | Secure, Scalable & Future-Ready Technology Solutions",
  description: "Nexis Tech Solutions (Private) Limited specializes in Mobile App Development, Web App Development, Government Digital Solutions, Dashboards & Monitoring, E-Commerce, and Smart Management Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable}`} suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="d8sfqDlRFQ4uNhSWEI0v14bRx7VJkq9qISagFs3aFBQ"
        />
        <script
          id="theme-init"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}