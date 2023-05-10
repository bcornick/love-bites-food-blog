import '../styles/globals.scss';
import { OrientationContextProvider } from './context/orientation';
import { quicksand } from './fonts';

export const metadata = {
  title: 'E&B Love Bites',
  description:
    'A living gallery of our relationship, as told through the food we eat. I love you bb 💛',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <OrientationContextProvider>{children}</OrientationContextProvider>
      </body>
    </html>
  );
}
