import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background hero image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Family moving with MoverTotes totes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <p className="inline-block rounded-full bg-secondary/90 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white">
            Move Smarter.
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Skip the Cardboard&nbsp;Chaos
          </h1>
          <p className="mt-4 text-lg text-white/80 sm:text-xl">
            Rent industrial-strength moving totes in Coeur d&apos;Alene.
            Delivered to your door, picked up when you&apos;re done.
          </p>

          <ul className="mt-6 space-y-3 text-base text-white sm:text-lg">
            {[
              "Industrial-strength totes — holds up to 65 lbs",
              "Free moving dolly included with every package",
              "Delivered to your door & picked up after your move",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-secondary-dark hover:shadow-xl"
            >
              Reserve Now
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
