import './globals.css'
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />
        <script defer async src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
      </head>
      <body>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <div>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
