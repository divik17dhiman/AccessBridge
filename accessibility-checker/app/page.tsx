import Header from "./components/Header"
import Footer from "./components/Footer"
import AccessibilityChecker from "./components/AccessibilityChecker"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Access-Bridge",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">AccessBridge</h1>
        <AccessibilityChecker />
      </main>
    </div>
  )
}

