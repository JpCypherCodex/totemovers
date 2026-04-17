import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Coming Soon | MoverTotes",
  description: "Something better is coming to Coeur d'Alene. Moving tote rental, reimagined.",
};

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gradient-to-br from-primary to-primary-dark px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-block rounded-2xl bg-white p-6 shadow-lg">
          <Image
            src="/logo.png"
            alt="MoverTotes"
            width={300}
            height={130}
            className="h-20 w-auto sm:h-24"
            priority
          />
        </div>

        <h1 className="mt-10 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Something Better Is Coming to CdA
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
          We&apos;re putting the finishing touches on a new way to make your next move easier.
          Skip the cardboard chaos — we&apos;ll be renting industrial-strength totes in the greater
          Coeur d&apos;Alene area soon.
        </p>

        <div className="mt-10 inline-block rounded-full bg-secondary/20 px-6 py-3 text-secondary">
          <span className="text-base font-semibold text-white">🚚 Launching soon at MoverTotes.com</span>
        </div>

        <p className="mt-8 text-sm text-white/70">
          Questions? Email us at{" "}
          <a href="mailto:hello@totemovers.com" className="font-medium text-white underline hover:no-underline">
            hello@totemovers.com
          </a>
        </p>
      </div>
    </div>
  );
}
