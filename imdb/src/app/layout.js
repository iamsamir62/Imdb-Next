import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IMDb clone',
  description: 'This is a movie database clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-lightbg text-black dark:bg-darkbg dark:text-white transition-colors duration-300`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
