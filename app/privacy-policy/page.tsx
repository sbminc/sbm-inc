import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-deep-blue">Privacy Policy</h1>
          <p className="mb-6 text-gray-700">
            SBM Inc. is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your personal data.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-deep-blue">What Information We Collect</h2>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Information you provide through forms (such as name, email address, phone number, and other details for event registration or inquiries).</li>
            <li>Information you provide when contacting us directly (such as by email or phone).</li>
            <li>We do not collect payment information. All donations are processed securely by <a href="https://www.zeffy.com/" target="_blank" rel="noopener noreferrer" className="text-gold underline">Zeffy</a>. Please review Zeffy's privacy policy for details on how your payment information is handled.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2 text-deep-blue">How We Use Your Information</h2>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>To register you for events and programs.</li>
            <li>To communicate with you about our activities, events, and opportunities.</li>
            <li>To respond to your inquiries or requests.</li>
            <li>To improve our programs and services.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2 text-deep-blue">Your Rights</h2>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>You may request to review, update, or delete your personal information at any time by contacting us at <a href="mailto:info@sbminc.org" className="text-gold underline">info@sbminc.org</a>.</li>
            <li>We do not sell or share your personal information with third parties, except as required by law or as necessary to provide our services.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2 text-deep-blue">Contact Us</h2>
          <p className="mb-6 text-gray-700">
            If you have any questions about this Privacy Policy or how we handle your data, please contact us at <a href="mailto:info@sbminc.org" className="text-gold underline">info@sbminc.org</a>.
          </p>
          <p className="text-gray-500 text-sm">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>
      <Footer />
    </main>
  );
} 