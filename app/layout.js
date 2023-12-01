import './globals.css'

export const metadata = {
  title: 'Feliz dia mi niña preciosa',
  description: 'Para mi niña',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
