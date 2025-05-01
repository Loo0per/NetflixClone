import '../styles/globals.css';

export const metadata = {
  title: 'Netflix Clone',
  description: 'A clone of the Netflix landing page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-roboto">{children}</body>
    </html>
  );
}