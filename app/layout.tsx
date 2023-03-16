import './globals.css'

export const metadata = {
  title: 'Notes App',
  description: 'A Guided Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
