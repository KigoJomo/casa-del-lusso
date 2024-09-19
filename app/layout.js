import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Casa del Lusso',
  description: 'Indulge in timeless elegance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
