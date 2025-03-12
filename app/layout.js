import './globals.css';

export const metadata = {
  title: 'Egnoel Neto',
  description: "Egnoel Neto's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
