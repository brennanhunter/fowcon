'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Header from './Header';
import Footer from './Footer';

const ChatWidget = dynamic(() => import('./ChatWidget'), { ssr: false });

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
