import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import ContactForm from "../../../components/apna-ui/contact-form"

export default function Contact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
         <section>
           <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
           <p className="mb-4">
             We're here to help you make your website accessible to everyone. If you have any questions or need
             assistance, please don't hesitate to reach out.
           </p>
           <div className="space-y-2">
             <p>
               <strong>Email:</strong>{" "}
               <a href="mailto:info@accessibilitychecker.com" className="text-blue-600 hover:underline">
                 divik.dhiman2023@vitstudent.ac.in
               </a>
             </p>
             <p>
               <strong>Phone:</strong>{" "}
               <a href="tel:+11234567890" className="text-blue-600 hover:underline">
                 +91 8168338829
               </a>
             </p>
             <p>
               <strong>Address:</strong> VIT Chennai, Kanchipuram, 600127, Tamil Nadu, India
             </p>
           </div>
         </section>
         <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
         </Card>
       </div>
      </CardContent>
    </Card>

    // <main className="container mx-auto px-4 py-8 max-w-4xl">
    //   <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

    //   <div className="grid md:grid-cols-2 gap-8">
    //     <section>
    //       <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
    //       <p className="mb-4">
    //         We're here to help you make your website accessible to everyone. If you have any questions or need
    //         assistance, please don't hesitate to reach out.
    //       </p>
    //       <div className="space-y-2">
    //         <p>
    //           <strong>Email:</strong>{" "}
    //           <a href="mailto:info@accessibilitychecker.com" className="text-blue-600 hover:underline">
    //             divik.dhiman2023@vitstudent.ac.in
    //           </a>
    //         </p>
    //         <p>
    //           <strong>Phone:</strong>{" "}
    //           <a href="tel:+11234567890" className="text-blue-600 hover:underline">
    //             +91 8168338829
    //           </a>
    //         </p>
    //         <p>
    //           <strong>Address:</strong> VIT Chennai, Kanchipuram, 600127, Tamil Nadu, India
    //         </p>
    //       </div>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
    //       <ContactForm />
    //     </section>
    //   </div>
    // </main>
  )
}