import './globals.css';

export const metadata = {
  title: 'Will Ashe',
  description:
    'Will Ashe is a software engineer, artist, and musician based in Austin, TX.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
