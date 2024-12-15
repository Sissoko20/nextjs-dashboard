import '@/app/ui/global.css';
import {inter, vn} from '@/app/ui/fonts'
import { lusitana } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>

    </html>
  );
}
