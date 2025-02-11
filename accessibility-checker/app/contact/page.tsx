import type { Metadata } from "next"
import Contact from './components/contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: "Contact Us | Accessibility Checker",
  description:
    "Get in touch with our accessibility experts. We're here to help you make your website accessible to everyone.",
}

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">AccessBridge</h1>
            <Contact />
          </main>
          <Footer />
        </div>
  );
}

