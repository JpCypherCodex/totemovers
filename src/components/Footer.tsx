import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="text-lg font-bold text-white">Tote Movers</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              Coeur d&apos;Alene&apos;s premier moving tote rental service. Industrial-strength totes
              delivered to your door and picked up when you&apos;re done.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="font-medium text-white">Phone:</span>{" "}
                <a href="tel:+12085551234" className="hover:text-white">(208) 555-1234</a>
              </p>
              <p>
                <span className="font-medium text-white">Email:</span>{" "}
                <a href="mailto:info@totemovers.com" className="hover:text-white">info@totemovers.com</a>
              </p>
              <p>
                <span className="font-medium text-white">Area:</span> Coeur d&apos;Alene, ID
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/booking" className="hover:text-white">Book Now</Link></li>
              <li><Link href="/#faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Service Areas & Trust */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Service Areas</h3>
            <ul className="space-y-1 text-sm">
              <li>Coeur d&apos;Alene</li>
              <li>Post Falls</li>
              <li>Hayden</li>
              <li>Rathdrum</li>
              <li>Dalton Gardens</li>
              <li>Spirit Lake</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                100% Eco-Friendly
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                Locally Owned
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tote Movers. All rights reserved. Proudly serving Coeur d&apos;Alene and North Idaho.</p>
        </div>
      </div>
    </footer>
  );
}
