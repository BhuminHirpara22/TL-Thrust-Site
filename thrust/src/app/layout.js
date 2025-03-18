/* src/app/layout.js */
import './globals.css';

export const metadata = {
  title: 'THRUST',
  description: 'THRUST by Tinkerers Lab, IIIT Hyderabad',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
