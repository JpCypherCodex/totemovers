import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 text-white sm:py-28">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Skip the Cardboard&nbsp;Chaos
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl">
              Rent industrial-strength moving totes in Coeur d&apos;Alene.
              Delivered to your door, picked up when you&apos;re done.
            </p>

            <ul className="mt-6 space-y-3 text-base sm:text-lg">
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

          {/* Hero visual */}
          <div className="hidden lg:flex lg:justify-center">
            <div className="relative">
              <div className="h-80 w-80 rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <svg className="h-24 w-24 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <p className="mt-4 text-2xl font-bold">Pack Smarter</p>
                  <p className="mt-1 text-white/70">Move Easier</p>
                  <div className="mt-4 rounded-full bg-secondary/20 px-4 py-1 text-sm font-medium text-secondary">
                    Starting at $99
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
