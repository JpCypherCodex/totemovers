import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the family behind Tote Movers. After 11 moves in the CdA area, Josh built the moving solution he wished he'd always had.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero - Family Photo */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/family.jpg"
            alt="The family behind Tote Movers"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/20" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-32 text-center sm:py-44">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            We Get It.
          </h1>
          <p className="mt-3 text-lg text-white/80">A family that&apos;s been there — 11 moves and counting.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Yeah, We&apos;ve Done This a Few Times.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              Let me tell you something. Our family has moved <strong>five times</strong> right
              here in town. Five. And me — Josh, the husband, the dad, the guy who always ends
              up carrying the heavy stuff — I&apos;ve personally moved <strong>eleven times</strong> in
              the greater Coeur d&apos;Alene area.
            </p>
            <p>
              So trust me when I say: I know the excitement of every single move. The fresh
              start, the new neighborhood, the kids picking out their rooms. That part? That
              part is great.
            </p>
            <p>
              But you know what&apos;s not great? The packing. The boxes. The absolute circus
              that is trying to get ready for moving day.
            </p>
          </div>
        </div>
      </section>

      {/* Moving Photos Section */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/moving-kids.jpg"
                alt="Our kids helping on moving day"
                width={600}
                height={450}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/moving-day.jpg"
                alt="Moving day in Coeur d'Alene"
                width={600}
                height={450}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Rant - relatable pain points */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            The Box Problem
          </h2>
          <div className="mt-8 space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              Where do you even <em>get</em> boxes? You&apos;re driving around town hitting up
              grocery stores and liquor shops like some kind of cardboard scavenger hunt. Or
              you&apos;re buying them — and seriously, have you seen what boxes cost these days?
              For something you&apos;re literally going to throw away.
            </p>
            <p>
              Then there&apos;s the tape. Oh, the tape. The tape gun that jams. The dispenser
              that cuts crooked. The tape that tears right down the middle of the roll — and
              now you&apos;re peeling at it with your fingernail for five minutes while your
              spouse watches. And then you just throw the whole roll away and grab a new one.
            </p>
            <p>
              And after the move? You&apos;ve got a garage full of flattened cardboard that you
              now have to deal with. Recycling runs. Trips to the dump. Boxes sitting in your
              garage for six months because &ldquo;we might need them again.&rdquo;
            </p>
            <p className="text-xl font-semibold text-primary">
              There had to be a better way.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-accent py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            So We Built One.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              Tote Movers is the moving solution I wished I&apos;d had for all eleven of those
              moves. Industrial-strength totes that stack perfectly, hold up to 65 pounds,
              and don&apos;t need a single piece of tape. We deliver them to your door. You pack.
              You move. You unpack. And then we come pick them all up.
            </p>
            <p>
              No cardboard scavenger hunts. No tape guns. No post-move recycling runs. No
              guilt about tossing a bunch of single-use boxes in the trash.
            </p>
            <p>
              We are your moving experts — and honestly? This just makes
              <strong> tote-al sense.</strong>
            </p>
            <p className="text-gray-mid italic">
              (See what I did there?)
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">What We Stand For</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Local to the Core",
                desc: "We live here. We move here. We're raising our family here. When you rent from Tote Movers, you're supporting a CdA family who actually gets what moving around this area is like.",
              },
              {
                title: "No More Waste",
                desc: "Each tote gets reused hundreds of times. That's hundreds of cardboard boxes that don't end up in a landfill. Moving green has literally never been this easy.",
              },
              {
                title: "Stupid Simple",
                desc: "We deliver. You pack. We pick up. No tape, no assembly, no post-move cleanup. That's it. That's the whole thing.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-xl bg-gray-light p-6">
                <h3 className="text-lg font-semibold text-primary">{v.title}</h3>
                <p className="mt-2 text-gray-mid leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-bold sm:text-4xl">Make Your Move Easier This Time.</h2>
          <p className="mt-3 text-lg text-white/80">
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
