import { Header } from "@/components/Header";
import { Footer } from "@/components/FooterSection/FooterSection";
import Link from "next/link";



export default function TermsOfService() {

    return (
        <main id="top" className="min-h-screen">
            <Header />
            <section className="py-20 bg-secondary scroll-mt-20">
                <div className="container mx-auto px-4">

                    <h2 className="text-4xl font-bold mb-12">2. Terms of Service</h2>
                    <h3 className="text-xl font-bold mb-6 mt-12">
                        2.1 Acceptance of Terms
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                        By using Renoir.Pro (“Service”), you agree to these Terms of Service. If you do not agree, do not use our platform.
                    </p>
                    <h3 className="text-xl font-bold mb-6 mt-12">2.2 Use of Service</h3>
                    <p className="mb-4 text-muted-foreground">You must be at least 18 years old to use our services.</p>
                    <p className="mb-4 text-muted-foreground">You agree not to misuse the platform (e.g., unauthorized access, scraping, or harming other users).</p>
                    <h3 className="text-xl font-bold mb-6 mt-12">2.3 User Accounts & Responsibilities</h3>
                    <p className="mb-4 text-muted-foreground">You are responsible for maintaining account security.</p>
                    <p className="mb-4 text-muted-foreground">We reserve the right to suspend accounts that violate our policies.</p>
                    <h3 className="text-xl font-bold mb-6 mt-12">2.4 Intellectual Property</h3>
                    <p className="mb-4 text-muted-foreground">All content, trademarks, and software remain the property of Renoir.Pro.</p>
                    <p className="mb-4 text-muted-foreground">You may not copy, modify, or redistribute our content without authorization.</p>
                    <h3 className="text-xl font-bold mb-6 mt-12">2.5 Payment & Subscription Terms</h3>
                    <p className="mb-4 text-muted-foreground">Certain features require a paid subscription billed [monthly/annually].</p>
                    <p className="mb-4 text-muted-foreground">Refund policies are subject to our [Refund Policy].</p>
                    <h3 className="text-xl font-bold mb-6 mt-12">2.6 Data Protection & Compliance</h3>
                    <p className="mb-4 text-muted-foreground">We comply with GDPR and CCPA regulations and commit to protecting your data.</p>
                    <h3 className="text-xl font-bold mb-6 mt-12">2.7 Limitation of Liability</h3>
                    <p className="mb-4 text-muted-foreground">We are not liable for indirect or consequential damages arising from service use.</p>
                    <p className="mb-4 text-muted-foreground">Our total liability is limited to the amount paid for the service in the last 12 months.</p>
                    <h3 className="text-xl font-bold mb-6 mt-12">2.8 Modifications to Terms</h3>
                    <p className="mb-4 text-muted-foreground"> We may update these terms periodically. Continued use of our services constitutes acceptance of the latest terms.</p>
                    <h3 className="text-xl font-bold mb-6 mt-12">3. Contact Information</h3>
                    <p className="mb-4 text-muted-foreground">For privacy inquiries, requests, or general questions, contact us at:</p>
                    <p className="mb-4 text-muted-foreground"> Email: <Link href='mailto:doug@renoir.pro' className='hover:underline'>doug@renoir.pro</Link></p>
                </div>
            </section>
            <Footer />
        </main>
    );
}