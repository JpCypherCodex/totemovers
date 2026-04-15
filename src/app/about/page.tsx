import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Tote Movers — Coeur d'Alene's locally owned moving tote rental service. We're on a mission to make moving easier and greener in North Idaho.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About Tote Movers</h1>
          <p className="mt-4 text-lg text-white/80">
            Making moves easier, one tote at a time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our Story</h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Tote Movers was born from a simple frustration: moving shouldn&apos;t mean spending hours
              hunting for cardboard boxes, taping them together, and then watching them fall apart
              halfway through the move.
            </p>
            <p>
              Based right here in Coeur d&apos;Alene, Idaho, we saw an opportunity to offer something
              better. Our industrial-strength, reusable moving totes are designed to handle the
              toughest moves while keeping cardboard out of the landfill.
            </p>
            <p>
              We deliver clean, stackable totes and a free moving dolly straight to your door. When
              you&apos;re done unpacking, we come pick everything up. No tape, no assembly, no trips
              to the recycling center.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">What We Stand For</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Community First",
                desc: "We're a locally owned business proudly serving our North Idaho neighbors. When you rent from us, you're supporting the CdA community.",
              },
              {
                title: "Sustainability",
                desc: "Each tote is reused hundreds of times, keeping tons of cardboard out of landfills every year. Moving green has never been easier.",
              },
              {
                title: "Hassle-Free Service",
                desc: "From delivery to pickup, we handle the logistics so you can focus on what matters — settling into your new home.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary">{v.title}</h3>
                <p className="mt-2 text-gray-mid leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Ready to Get Started?</h2>
          <p className="mt-3 text-gray-mid">
            See our packages and book your totes in minutes.
          </p>
          <Link
            href="/booking"
            className="mt-6 inline-flex rounded-full bg-secondary px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-secondary-dark"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
