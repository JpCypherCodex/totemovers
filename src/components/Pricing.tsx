import Link from "next/link";

const packages = [
  { name: "Studio", price: 119, totes: 20 },
  { name: "1-Bedroom", price: 145, totes: 30 },
  { name: "2-Bedroom", price: 179, totes: 40, popular: true },
  { name: "3-Bedroom", price: 229, totes: 55 },
  { name: "4-Bedroom", price: 299, totes: 75 },
  { name: "5-Bedroom", price: 399, totes: 100, bestValue: true },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-light py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-mid">
            Every package includes a moving dolly and free delivery &amp; pickup in the Coeur d&apos;Alene area.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md ${
                pkg.popular ? "ring-2 ring-secondary" : pkg.bestValue ? "ring-2 ring-primary" : "border border-gray-100"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              {pkg.bestValue && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  Best Value
                </span>
              )}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
                <div className="mt-3">
                  <span className="text-4xl font-extrabold text-primary">${pkg.price}</span>
                </div>
                <p className="mt-2 text-gray-mid">{pkg.totes} totes</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {[
                  `${pkg.totes} industrial-strength totes`,
                  "Free moving dolly included",
                  "Delivery & pickup included",
                  "Up to 2 weeks rental",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/booking?package=${encodeURIComponent(pkg.name)}`}
                className={`mt-6 block rounded-full py-2.5 text-center text-sm font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-secondary text-white hover:bg-secondary-dark"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
