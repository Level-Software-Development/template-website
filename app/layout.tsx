import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ApolloWrapper } from './util/useClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Website',
  description: 'Website Description.',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    url: 'Link to website.',
    title: 'Website',
    description: 'Website Description.',
    images: [
      {
        url: 'Website Image Preview Link',
        alt: 'Website',
        type: 'image/jpeg',
      },
    ],
    siteName: 'Website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
