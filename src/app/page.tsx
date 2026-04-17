import Hero from "@/components/Hero";
import WhyRent from "@/components/WhyRent";
import WhoWeServe from "@/components/WhoWeServe";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyRent />
      <WhoWeServe />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <FAQ />

      {/* CTA Banner */}
      <section className="bg-primary py-14 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold sm:text-4xl">Ditch the Boxes.</h2>
          <p className="mt-3 text-lg text-white/80">
            Moving made easy. Reserve your totes today and see the difference.
          </p>
          <Link
            href="/booking"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-secondary px-10 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-secondary-dark"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Tote Movers",
            description:
              "Moving tote rental service in Coeur d'Alene, Idaho. Industrial-strength totes delivered to your door.",
            url: "https://totemovers.com",
            telephone: "(208) 771-2037",
            email: "hello@totemovers.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Coeur d'Alene",
              addressRegion: "ID",
              addressCountry: "US",
            },
            areaServed: [
              "Coeur d'Alene",
              "Post Falls",
              "Hayden",
              "Rathdrum",
              "Dalton Gardens",
              "Spirit Lake",
            ],
            priceRange: "$119 - $399",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What areas do you deliver to?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We deliver throughout the greater Coeur d'Alene area, including Post Falls, Hayden, Rathdrum, Dalton Gardens, Spirit Lake, and surrounding communities.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to clean the totes before pickup?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Just make sure the totes are empty — we handle the cleaning.",
                },
              },
              {
                "@type": "Question",
                name: "Can I order additional totes if I run out?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely! Additional totes are available at a prorated price, usually delivered within 24 hours.",
                },
              },
              {
                "@type": "Question",
                name: "How does pricing work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our pricing is all-inclusive — delivery, totes, a free moving dolly, and pickup with no hidden fees.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
