import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AccessibilityStatement() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-deep-blue">Accessibility Statement</h1>
          <p className="mb-6 text-gray-700">
            SBM Inc. is committed to making our website accessible to everyone, including people with disabilities. We strive to follow best practices and standards for accessibility, and we are continually working to improve the user experience for all visitors.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-deep-blue">Our Commitment</h2>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>We aim to meet or exceed the requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</li>
            <li>We regularly review our website and make updates to improve accessibility.</li>
            <li>We welcome feedback from our community to help us identify and address accessibility barriers.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2 text-deep-blue">Contact Us</h2>
          <p className="mb-6 text-gray-700">
            If you experience any difficulty accessing content on our site or have suggestions for improvement, please contact us at <a href="mailto:info@sbminc.org" className="text-gold underline">info@sbminc.org</a>. We will do our best to address your concerns promptly.
          </p>
          <p className="text-gray-500 text-sm">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>
      <Footer />
    </main>
  );
} 