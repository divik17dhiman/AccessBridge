import Header from "../components/Header"
import Footer from "../components/Footer"
import About from "./components/about"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Access-Bridge",
  description:
    "Get in touch with our accessibility experts. We're here to help you make your website accessible to everyone.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">AccessBridge</h1>
        <About />
      </main>
      <Footer />
    </div>
  )
}