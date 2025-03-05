import { Header } from "@/components/Header";
import { Footer } from "@/components/FooterSection/FooterSection";
import Link from "next/link";

export default function PrivacyPolicy() {

  return (
    <main id="top" className="min-h-screen">
      <Header />
      <section className="py-20 bg-secondary scroll-mt-20">
        <div className="py-20 bg-secondary scroll-mt-20">
          <div className="container mx-auto px-4">

            <h2 className="text-4xl font-bold mb-12">Privacy Policy</h2>
            <h3 className="text-xl font-bold mb-6 mt-12">
              <p>Effective Date: 2/24/2025</p>
              Last Updated:: 2/24/2025
            </h3>
            <h3 className="text-xl font-bold mb-6 mt-12">
              Introduction
            </h3>
            <p className="mb-4 text-muted-foreground">
            Renoir.One (“we,” “our,” or “us”) is committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, disclose, and protect your information when you interact with our website, products, and services.
            </p>
            <p className="mb-4 text-muted-foreground">
            By using our services, you consent to the practices described in this policy. If you do not agree, please refrain from using our services
            </p>
            <h3 className="text-xl font-bold mb-6 mt-12">1. Data We Collect</h3>
            <p className="mb-4 text-muted-foreground">We collect the following types of personal data to provide and improve our services:</p>
            <h3 className="text-xl font-bold mb-6 mt-12">1.1 Information You Provide Directly</h3>
            <div className="mb-4 text-muted-foreground">
              <p>Personal Information: Name, email, phone number, company name, job title.</p>
              <p>Account Information – Login credentials, user preferences, and settings.</p>
              <p>Billing & Payment Data – Payment details (processed securely via third-party providers such as Stripe or ACH).</p>
              <p>Communication Data – Inquiries, customer support messages, and other interactions.</p>
            </div>
            <h3 className="text-xl font-bold mb-6 mt-12">1.2 Information Collected Automatically</h3>
            <div className="mb-4 text-muted-foreground">
              <p>Device & Usage Data – IP address, browser type, operating system, and activity on our website.</p>
              <p>Cookies & Tracking Data – We use cookies and tracking technologies to analyze site performance, personalize content, and enhance user experience.</p>
            </div>
            <h3 className="text-xl font-bold mb-6 mt-12">1.3 Information from Third Parties</h3>
            <div className="mb-4 text-muted-foreground">
              <p>Marketing & Analytics Partners – Data from third-party services like Google Analytics and LinkedIn.</p>
              <p>Publicly Available Sources – Information collected from professional directories or publicly accessible websites.</p>
            </div>
            <h3 className="text-xl font-bold mb-6 mt-12">2. How We Use Your Data</h3>
            <p className="mb-4 text-muted-foreground">We process your data for the following purposes:</p>
            <div className="mb-4 text-muted-foreground">
              <p>Service Delivery – To provide, manage, and improve our platform.</p>
              <p>Personalization – To tailor our services and recommendations to your needs.</p>
              <p>Communication – To send transactional emails, service updates, and marketing content (opt-out available).</p>
              <p>Security & Compliance – To prevent fraud, enforce our terms, and comply with legal obligations.</p>
              <p>Analytics & Performance – To measure engagement and improve our offerings.</p>
              <p>We do not sell personal data to third parties.</p>
            </div>

            <h3 className="text-xl font-bold mb-6 mt-12">Legal Basis for Processing (GDPR Compliance)</h3>
            <p className="mb-4 text-muted-foreground">For users in the European Economic Area (EEA), we process personal data based on:</p>
            <div className="mb-4 text-muted-foreground">
              <p>Consent – When you opt-in to receive marketing communications.</p>
              <p>Contractual Necessity – When processing is required to fulfill our services.</p>
              <p>Legitimate Interest – When processing is necessary for security, fraud prevention, or business improvement.</p>
            </div>
            <h3 className="text-xl font-bold mb-6 mt-12">4. Your Rights (GDPR & CCPA Compliance)</h3>
            <h4 className="text-xl font-bold mb-6 mt-6">4.1 Rights for EU Users (GDPR)</h4>
            <p className='mb-4 text-muted-foreground'>You have the right to:</p>
            <div className="mb-4 text-muted-foreground">
              <ul>
                <li>&#10004; Access, correct, or delete your personal data.</li>
                <li>&#10004; Restrict or object to processing.</li>
                <li>&#10004; Request data portability.</li>
                <li>&#10004; Withdraw consent at any time.</li>
              </ul> 
            </div>
            <p className="mb-4 text-muted-foreground">To exercise your rights, contact us at <Link href='mailto:doug@renoir.one' className='hover:underline'>doug@renoir.one.</Link></p>
            <h3 className="text-xl font-bold mb-6 mt-12">4.2 Rights for California Residents (CCPA)</h3>
            
            <div className="mb-4 text-muted-foreground">
              <p className='mb-4'>California users can:</p>
              <ul>
                <li>&#10004; Request details about the personal data we collect.</li>
                <li>&#10004; Ask for deletion of personal data.</li>
                <li>&#10004; Opt out of data sales (we do not sell data).</li>
              </ul> 
            </div>
            <p className="mb-4 text-muted-foreground">To make a CCPA request, contact us at <Link href='mailto:doug@renoir.one' className='hover:underline'>doug@renoir.one.</Link></p>
            <h3 className="text-xl font-bold mb-6 mt-12">5. Data Sharing & Third-Party Processing</h3>
            <p className="mb-4 text-muted-foreground">We do not sell personal data but may share information with:</p>
            <ul className='text-muted-foreground'>
              <li>Service Providers – Cloud hosting, analytics, and customer support partners.</li>
              <li>Legal Authorities – When required by law or necessary to protect our rights.</li>
              <li>Business Transfers – If Renoir.Pro is involved in a merger, acquisition, or asset sale.</li>
            </ul>
            <h3 className="text-xl font-bold mb-6 mt-12">6. Data Retention & Security</h3>
            <p className="mb-4 text-muted-foreground">We implement best-in-class security measures including encryption, access controls, and monitoring to safeguard your data.</p>
            <ul className='text-muted-foreground'>
              <li>Retention Policy – We retain data only as long as necessary for business, legal, or compliance purposes.</li>
              <li>Inactive Accounts – Data associated with inactive accounts will be deleted or anonymized after 36 months.</li>
              <li>Breach Notification – In the event of a data breach, we will notify affected users promptly.</li>
            </ul>
            <h3 className="text-xl font-bold mb-6 mt-12">7. International Data Transfers (GDPR Compliance)</h3>
            <p className="mb-4 text-muted-foreground">For users in the EEA, if personal data is transferred outside of the EEA (e.g., to the U.S.), we implement safeguards such as:</p>
            <ul className='text-muted-foreground'>
                <li>&#10004; Standard Contractual Clauses (SCCs) approved by the European Commission.</li>
                <li>&#10004; Data Processing Agreements (DPAs) with third-party vendors.</li>
                <li>&#10004; Industry best practices to ensure privacy protection.</li>
            </ul> 
            <h3 className="text-xl font-bold mb-6 mt-12">8. Children's Privacy (COPPA Compliance)</h3>
            <p className="mb-4 text-muted-foreground">Our services are not intended for individuals under 13 years old. We do not knowingly collect personal data from children. If you believe a child has provided data, please contact us at <Link href='mailto:doug@renoir.pro' className='hover:underline'>doug@renoir.pro.</Link></p>
            <h3 className="text-xl font-bold mb-6 mt-12">9. Marketing & Communication Preferences</h3>
            <p className="mb-4 text-muted-foreground">You can opt out of marketing emails at any time by:</p>
            <ul className='text-muted-foreground'>
                <li>&#10004; Clicking the ‘unsubscribe’ link in any email.</li>
                <li>&#10004; Contacting us at <Link href='mailto:doug@renoir.pro' className='hover:underline'>doug@renoir.pro</Link></li>
            </ul> 
            <p className="mb-4 text-muted-foreground">Even if you opt out, you may still receive transactional emails related to your account or service updates.</p>
            <h3 className="text-xl font-bold mb-6 mt-12">10. Cookies & Tracking Technologies</h3>
            <p className='mb-4 text-muted-foreground'>We use cookies for:</p>
            <ul className='text-muted-foreground'>
                <li>&#10004; Essential site functionality</li>
                <li>&#10004; Performance & analytics tracking.</li>
                <li>&#10004; Personalized marketing.</li>
            </ul>
            <p className="mb-4 text-muted-foreground">Opt-Out Options:</p>
            <ul className='text-muted-foreground'>
              <li>You can manage your cookie preferences through your browser settings.</li>
              <li>Use third-party tools like YourAdChoices to opt out of tracking.</li>
            </ul>
            <h3 className="text-xl font-bold mb-6 mt-12">11. Updates to This Privacy Policy</h3>
            <p className="mb-4 text-muted-foreground">We may update this policy periodically. If significant changes are made, we will notify users via:</p>
            <ul className='text-muted-foreground'>
                <li>&#10004; Email notifications</li>
                <li>&#10004; Website banners or in-app messages.</li>
            </ul>
            <p className="mb-4 text-muted-foreground">Last Updated: 2/24/2025</p>
            <h3 className="text-xl font-bold mb-6 mt-12">12. Contact Us</h3>
            <p className="mb-4 text-muted-foreground">For questions or requests regarding this Privacy Policy, contact us at:</p>
            <ul className='text-muted-foreground'>
              <li>Email: <Link href='mailto:doug@renoir.one' className='hover:underline'>doug@renoir.one</Link></li>
              <li>Address: 30 N, Gould Ste R. Sheridan, WY 82801</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}