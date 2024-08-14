import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/utils/theme-provider";
import { ClerkProvider } from '@clerk/nextjs';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: {
    default: 'Loop',
    template: '%s | Loop',
  },
  description: 'Open-Source link in bio tool for creators.',
  openGraph: {
    title: 'Loop',
    description: 'Open-Source link in bio tool for creators.',
    url: 'https://loopp.vercel.app', // Replace with your actual site URL
    siteName: 'Loop',
    images: [
      {
        url: 'https://drive.google.com/file/d/1LGI6mK9iFaQl_mIR0VMgY4V6r9yY2n7u/view?usp=drive_link', // Replace with the URL of your preview image
        width: 1200,
        height: 630,
        alt: 'Loop',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loop',
    description: 'Open-Source link in bio tool for content creators, developers, and enthusiasts.',
    images: [
      'https://drive.google.com/file/d/1LGI6mK9iFaQl_mIR0VMgY4V6r9yY2n7u/view?usp=drive_link', // Replace with the URL of your preview image
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
           <NextTopLoader
              color="hsl(229 100% 62%)"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 0px hsl(229 100% 62%),0 0 0px hsl(229 100% 62%)"
              template='<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
              zIndex={1600}
              showAtBottom={false}
            />
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange={false}
          >
            {children}
            <Toaster position="bottom-right"/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
